/**
 * 打卡訊息解析
 * ------------------------------------------------
 * 對應同仁會傳的格式範例：
 *
 * 第15天 完成✌️
 * 我是[Shanna]
 * ✅️謝謝我今天 [我完成課程作業，準時繳交］
 * ✅我是個［價值］的人YES(flexed biceps)
 * 🌡能量記錄(+/0/-)：-
 *
 * 判斷邏輯：
 *   1. 用「第 X 天」抓出天數（1~21 才算有效範圍，可依實際挑戰天數調整）
 *   2. 訊息中同時要包含「完成」兩個字，避免同仁只是在聊天提到「第5天」但不是打卡
 * 只要符合以上兩點，就視為一次有效打卡。
 */

// 抓「第15天」「第 3 天」這種格式，數字取出來
const DAY_PATTERN = /第\s*(\d{1,2})\s*天/;

/**
 * 嘗試從姓名欄位抓出同仁填的名字，抓不到就回傳 null
 * 對應「我是[Shanna]」或「我是【Shanna】」這種寫法
 */
function extractName(text) {
  const match = text.match(/我是[\[【]([^\]】]+)[\]】]/);
  return match ? match[1].trim() : null;
}

/**
 * 判斷是否為有效打卡訊息，是的話回傳 { day, name }，不是則回傳 null
 */
function parseCheckin(text) {
  const dayMatch = text.match(DAY_PATTERN);
  if (!dayMatch) return null;

  const hasCompletionWord = text.includes("完成");
  if (!hasCompletionWord) return null;

  const day = parseInt(dayMatch[1], 10);
  if (Number.isNaN(day) || day < 1 || day > 21) return null;

  return { day, name: extractName(text) };
}

module.exports = { parseCheckin };
