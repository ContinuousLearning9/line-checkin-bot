/**
 * 關鍵字規則設定
 * ------------------------------------------------
 * mode: "includes" (訊息包含此關鍵字即命中，預設建議用這個)
 *       "exact"    (訊息需完全等於關鍵字)
 *
 * reply 可以是純文字，也可以是 LINE message object 陣列（例如加 Flex Message、圖片等）
 * 由上到下比對，符合第一條規則就會回覆該規則內容並停止往下比對，
 * 所以「範圍較廣的關鍵字」建議放後面，「精準關鍵字」放前面。
 */

const keywordRules = [
  {
    mode: "includes",
    keywords: ["課程", "培訓", "訓練"],
    reply:
      "您好！關於課程/培訓相關問題，請問是想詢問：\n1️⃣ 課程時間\n2️⃣ 報名方式\n3️⃣ 課程內容\n請輸入對應數字，我們會盡快為您解答 😊",
  },
  {
    mode: "includes",
    keywords: ["營業時間", "上班時間"],
    reply: "我們的服務時間為週一至週五 09:00-18:00，週末及國定假日休息喔！",
  },
  {
    mode: "includes",
    keywords: ["客服", "真人", "轉接"],
    reply: "已收到您的需求，將由專人盡快與您聯繫，謝謝您的耐心等候 🙏",
  },
  {
    mode: "exact",
    keywords: ["hi", "hello", "你好"],
    reply: "您好！歡迎詢問，請問需要什麼協助呢？",
  },
];

// 完全沒有命中任何關鍵字時的預設回覆
const defaultReply =
  "感謝您的訊息！若需要協助，可以輸入「課程」「營業時間」「客服」等關鍵字，我們會自動為您回覆。";

module.exports = { keywordRules, defaultReply };
