function solution(a, b, c) {
  let answer = a;
  if (answer >= b) {
    answer = b;
  }
  if (answer >= c) {
    answer = c;
  }
  return answer;
}

console.log(solution(2, 5, 1));

// function solution(a, b, c) {
//   let answer;
//   if (a < b) answer = a;
//   else answer = b;
//   if (c < answer) answer = c;
//   return answer;
// }
