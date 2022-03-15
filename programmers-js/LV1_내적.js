// 월간 코드 챌린지 시즌1

function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

// reduce 사용
// function solution(a, b) {
//   return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
// }
