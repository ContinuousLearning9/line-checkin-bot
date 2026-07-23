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
 *      同時支援阿拉伯數字（第10天）與中文數字（第十天）兩種寫法
 *   2. 訊息中同時要包含「完成」兩個字，避免同仁只是在聊天提到「第5天」但不是打卡
 * 只要符合以上兩點，就視為一次有效打卡。
 */

// 中文數字對照表（1~21，挑戰範圍內全部列出，不用寫轉換演算法，直接查表最不容易出錯）
const CHINESE_NUMERALS = {
  "一": 1, "二": 2, "三": 3, "四": 4, "五": 5,
  "六": 6, "七": 7, "八": 8, "九": 9, "十": 10,
  "十一": 11, "十二": 12, "十三": 13, "十四": 14, "十五": 15,
  "十六": 16, "十七": 17, "十八": 18, "十九": 19, "二十": 20,
  "二十一": 21,
};

// 抓「第15天」「第 3 天」（阿拉伯數字）或「第十天」「第二十一天」（中文數字）
const DAY_PATTERN = /第\s*([0-9一二三四五六七八九十]{1,4})\s*天/;

/**
 * 把抓到的天數文字轉成數字，阿拉伯數字直接轉，中文數字查表轉換
 */
function convertDayText(dayText) {
  // 先試試看是不是阿拉伯數字
  if (/^\d+$/.test(dayText)) {
    return parseInt(dayText, 10);
  }
  // 查中文數字對照表
  return CHINESE_NUMERALS[dayText] ?? null;
}

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

  const day = convertDayText(dayMatch[1]);
  if (day === null || Number.isNaN(day) || day < 1 || day > 21) return null;

  return { day, name: extractName(text) };
}

module.exports = { parseCheckin };
