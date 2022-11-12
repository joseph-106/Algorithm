function solution(balls, share) {
  let numerator = 1;
  let denominator = 1;

  for (let i = 0; i < share; i++) {
    numerator *= balls - i;
    denominator *= share - i;
  }

  return numerator / denominator;
}
