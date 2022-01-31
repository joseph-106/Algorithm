// 연습문제

function solution(n, m) {
  // 조건에 맞는 값(i) 찾을 때까지 반복문
  for (let i = n * m; i > 0; i--) {
    if ((n % i == 0) & (m % i == 0)) {
      return [i, (n * m) / i];
    }
  }
}
