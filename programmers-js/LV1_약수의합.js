// 연습문제

function solution(n) {
  let sum = 0;
  if (n === 0) {
    return sum;
  }
  // 나눠지는 값으로 약수 찾기
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}
