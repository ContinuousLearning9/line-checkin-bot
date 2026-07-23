/**
 * LINE 官方帳號 - 關鍵字自動回覆機器人
 * ------------------------------------------------
 * 功能：
 *  1. 驗證 LINE Webhook 簽章 (x-line-signature)
 *  2. 依「keywords.js」設定的關鍵字規則自動回覆
 *  3. 支援「完全符合」與「包含關鍵字」兩種比對模式
 *
 * 部署方式：任何支援 Node.js 的主機都可以（Render / Railway / GCP Cloud Run / 自架主機皆可）
 * Webhook URL 必須是 https，且路徑要跟你在 LINE Developers 填的一致（例：https://your-domain.com/webhook）
 */

const express = require("express");
const crypto = require("crypto");
const axios = require("axios");
const { keywordRules, defaultReply } = require("./keywords");
const { parseCheckin } = require("./checkin");
const { dayBadges } = require("./day-badges");

const app = express();

const CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET; // Channel Secret
const CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN; // Channel Access Token

// 必須用 raw body 才能驗證簽章，所以不要用 express.json() 直接掛在這條路由上
app.use(
  "/webhook",
  express.raw({ type: "application/json" })
);

/**
 * 驗證這個 request 真的是 LINE 平台送來的
 * (Access Token 是拿來呼叫 API，Channel Secret 是拿來驗證 webhook 來源，兩者不同)
 */
function verifySignature(rawBody, signature) {
  const hash = crypto
    .createHmac("SHA256", CHANNEL_SECRET)
    .update(rawBody)
    .digest("base64");
  return hash === signature;
}

/**
 * 組成打卡成功的回覆內容：一句祝賀文字 + 當天對應的徽章圖片
 * 找不到對應圖片時（例如設定檔還沒填），就只回文字，不會噴錯
 */
function buildCheckinReply({ day, name }) {
  const greetingName = name ? name : "同仁";
  const messages = [
    {
      type: "text",
      text: `🎉 第 ${day} 天打卡完成！恭喜 ${greetingName}，繼續保持下去！`,
    },
  ];

  const badge = dayBadges[day];
  if (badge && Array.isArray(badge.images)) {
    // 一天可能有多張圖（情境圖 + 進度卡），依序加入回覆訊息
    // 注意：LINE reply API 一次最多 5 則訊息，1 則文字 + 2 張圖 = 3 則，沒問題
    for (const img of badge.images) {
      messages.push({
        type: "image",
        originalContentUrl: img.originalContentUrl,
        previewImageUrl: img.previewImageUrl,
      });
    }
  }

  return messages;
}

/**
 * 依關鍵字規則找出對應回覆
 * - exact: 訊息內容需完全等於某個關鍵字
 * - includes: 訊息內容只要「包含」某個關鍵字就算命中
 * 由上到下比對，第一個命中的規則優先
 */
function matchReply(userText) {
  const text = userText.trim();

  for (const rule of keywordRules) {
    const keywords = rule.keywords;
    if (rule.mode === "exact") {
      if (keywords.some((kw) => text === kw)) return rule.reply;
    } else {
      // 預設用「包含」比對，比較符合中文使用者打字習慣
      if (keywords.some((kw) => text.includes(kw))) return rule.reply;
    }
  }
  return defaultReply; // 沒有任何關鍵字命中時的預設回覆
}

/**
 * 呼叫 LINE Reply API 回傳訊息
 * 注意：replyToken 有時效性（約 1 分鐘）且只能使用一次
 */
async function replyMessage(replyToken, textOrMessages) {
  const messages = Array.isArray(textOrMessages)
    ? textOrMessages
    : [{ type: "text", text: textOrMessages }];

  await axios.post(
    "https://api.line.me/v2/bot/message/reply",
    { replyToken, messages },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
      },
    }
  );
}

app.post("/webhook", async (req, res) => {
  const signature = req.headers["x-line-signature"];
  const rawBody = req.body; // Buffer，因為上面用了 express.raw()

  if (!CHANNEL_SECRET || !verifySignature(rawBody, signature)) {
    return res.status(401).send("Invalid signature");
  }

  // 驗證通過後手動解析成 JSON
  const body = JSON.parse(rawBody.toString("utf8"));
  const events = body.events || [];

  // 先回 200 給 LINE，避免重送；事件處理用非同步跑
  res.status(200).send("OK");

  for (const event of events) {
    try {
      // 只處理「文字訊息」事件，其餘（貼圖、圖片、加好友等）可依需求擴充
      if (event.type === "message" && event.message.type === "text") {
        const userText = event.message.text;
        const checkin = parseCheckin(userText);

        if (checkin) {
          // 符合打卡格式：回祝賀文字 + 當天徽章圖片
          const reply = buildCheckinReply(checkin);
          await replyMessage(event.replyToken, reply);
        } else {
          // 不是打卡訊息，走一般關鍵字自動回覆
          const reply = matchReply(userText);
          await replyMessage(event.replyToken, reply);
        }
      }
    } catch (err) {
      console.error("處理事件時發生錯誤:", err.response?.data || err.message);
    }
  }
});

// 健康檢查用
app.get("/", (req, res) => res.send("LINE bot is running."));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
