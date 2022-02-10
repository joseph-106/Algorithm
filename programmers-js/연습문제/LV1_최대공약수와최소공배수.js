// 연습문제

function solution(n, m) {
  // 조건에 맞는 값(i) 찾을 때까지 반복문
  for (let i = n * m; i > 0; i--) {
    if ((n % i == 0) & (m % i == 0)) {
      return [i, (n * m) / i];
    }
  }
}

// 유클리드 호제법 ~ 최대공약수
// function gcd(n, m) {
//   const large = n > m ? n : m;
//   const small = n > m ? m : n;
//   return large % small == 0 ? small : gcd(small, large % small);
// }
