function solution(k, m, score) {
  const box = [];
  let profit = 0;

  score.sort((a, b) => a - b);

  while (score.length) {
    box.push(score.pop());

    if (box.length === m) {
      profit += Math.min(...box) * m;
      box.length = 0;
    }
  }

  return profit;
}
