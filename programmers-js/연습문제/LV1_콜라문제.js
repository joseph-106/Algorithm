function solution(a, b, n) {
  let [empty, change] = [n, 0];

  while (empty >= a) {
    empty -= a;
    empty += b;
    change += b;
  }

  return change;
}
