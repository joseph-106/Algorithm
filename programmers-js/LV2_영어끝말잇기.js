// Summer/Winter Coding(~2018)

function solution(n, words) {
  let [num, round] = [1, 1];
  let prev = words[0][0];
  const duplicated = [];
  while (words.length) {
    if (num === n + 1) {
      round++;
      num = 1;
    }
    const word = words.shift();
    if (word.length === 1 || word[0] !== prev || duplicated.includes(word))
      return [num, round];
    prev = word[word.length - 1];
    duplicated.push(word);
    num++;
  }
  return [0, 0];
}
