/**
 * 入力された文字列の各単語の出現回数をオブジェクトの配列に変換して返す。
 * @param {string} input 単語を半角スペースで区切った文字列。
 * @return {Array.<object>} 各単語の名称と出現回数を記録したオブジェクトの配列。
 */
function countWords(input) {
  // 半角スペースで文字列を分割し、配列に変換する。
  values = input.trim().split(" ");

  // 各単語の出現回数を取得する。
  wordCounts = {};

  values.forEach(value => {
    if (typeof wordCounts[value] === "undefined") {
      wordCounts[value] = 1;
    } else {
      wordCounts[value] += 1;
    }
  });

  // 各単語の名称と出現回数をオブジェクトに保存する。
  results = [];

  for (key in wordCounts) {
    let result = {
      word: key,
      count: wordCounts[key]
    };
    results.push(result);
  }

  return results;
}
