function solution(score) {
  return score.map(
    (x) => score.filter((y) => x[0] + x[1] < y[0] + y[1]).length + 1
  );
}
