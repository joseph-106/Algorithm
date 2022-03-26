function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(10));

// function solution(n) {
//   let answer = 0;
//   for (let i = 1; i <= n; i++) {
//     answer = answer + i;
//   }
//   return answer;
// }
