/**
 * 21 天打卡徽章圖片對照表
 * ------------------------------------------------
 * 每一天回覆「兩張圖片」：
 *   images[0] -> 情境圖（航海主題插畫 + 當天一段話）
 *   images[1] -> 進度卡（21天集點卡，累計到當天的鑽石數）
 *
 * 圖片託管在 GitHub public repo：ContinuousLearning9/line-bot-badges（檔案在根目錄）
 * 網址規則：https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/dayXX_a.png
 *
 * 注意：以下 17 個檔案上傳時失敗，目前网址还是 404，需要重新上傳這些檔案：
 *   day01_a.png, day03_a.png, day03_a_preview.jpg, day03_b_preview.jpg,
 *   day04_a.png, day04_a_preview.jpg, day04_b_preview.jpg, day05_b.png,
 *   day05_b_preview.jpg, day06_b.png, day07_a.png, day07_b_preview.jpg,
 *   day08_a.png, day08_b.png, day09_a.png, day10_a.png, day10_b_preview.jpg
 *
 * LINE 圖片訊息規定：
 *   - originalContentUrl / previewImageUrl 都必須是「公開可存取」的 https 網址
 *   - 格式限定 JPEG 或 PNG
 *   - originalContentUrl 檔案大小上限 10MB，previewImageUrl 上限 1MB
 */

const dayBadges = {
  1: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day01_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day01_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day01_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day01_b_preview.jpg" },
    ],
  },
  2: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day02_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day02_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day02_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day02_b_preview.jpg" },
    ],
  },
  3: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day03_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day03_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day03_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day03_b_preview.jpg" },
    ],
  },
  4: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day04_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day04_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day04_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day04_b_preview.jpg" },
    ],
  },
  5: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day05_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day05_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day05_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day05_b_preview.jpg" },
    ],
  },
  6: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day06_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day06_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day06_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day06_b_preview.jpg" },
    ],
  },
  7: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day07_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day07_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day07_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day07_b_preview.jpg" },
    ],
  },
  8: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day08_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day08_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day08_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day08_b_preview.jpg" },
    ],
  },
  9: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day09_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day09_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day09_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day09_b_preview.jpg" },
    ],
  },
  10: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day10_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day10_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day10_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day10_b_preview.jpg" },
    ],
  },
  11: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day11_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day11_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day11_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day11_b_preview.jpg" },
    ],
  },
  12: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day12_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day12_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day12_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day12_b_preview.jpg" },
    ],
  },
  13: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day13_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day13_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day13_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day13_b_preview.jpg" },
    ],
  },
  14: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day14_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day14_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day14_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day14_b_preview.jpg" },
    ],
  },
  15: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day15_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day15_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day15_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day15_b_preview.jpg" },
    ],
  },
  16: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day16_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day16_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day16_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day16_b_preview.jpg" },
    ],
  },
  17: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day17_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day17_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day17_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day17_b_preview.jpg" },
    ],
  },
  18: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day18_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day18_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day18_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day18_b_preview.jpg" },
    ],
  },
  19: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day19_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day19_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day19_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day19_b_preview.jpg" },
    ],
  },
  20: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day20_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day20_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day20_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day20_b_preview.jpg" },
    ],
  },
  21: {
    images: [
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day21_a.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day21_a_preview.jpg" },
      { originalContentUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day21_b.png", previewImageUrl: "https://raw.githubusercontent.com/ContinuousLearning9/line-bot-badges/main/day21_b_preview.jpg" },
    ],
  },
};

module.exports = { dayBadges };