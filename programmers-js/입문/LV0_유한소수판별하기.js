function solution(a, b) {
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return Number.isInteger(a / b) ? 1 : 2;
}
