function solution(n) {
  const count = n.toString(2).split("1").length - 1;
  while (n <= 1000000) {
    n += 1;
    if (n.toString(2).split("1").length - 1 === count) return n;
  }
}
