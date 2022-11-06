function solution(n) {
  return Array.from({ length: (n + 1) / 2 }, (_, i) => 2 * i + 1);
}
