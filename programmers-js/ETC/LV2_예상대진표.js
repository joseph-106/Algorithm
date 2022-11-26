// 2017 팁스타운

function solution(n, a, b) {
  if (a > b) [a, b] = [b, a];
  for (let i = 1; i <= Math.log2(n); i++) {
    if (b % 2 === 0 && b - a === 1) return i;
    a = Math.round(a / 2);
    b = Math.round(b / 2);
  }
}
