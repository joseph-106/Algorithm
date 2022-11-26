// 월간 코드 챌린지 시즌3

function solution(n, left, right) {
  const arr = [];
  for (let i = left; i <= right; i++)
    arr.push(Math.max(Math.floor(i / n), i % n) + 1);
  return arr;
}
