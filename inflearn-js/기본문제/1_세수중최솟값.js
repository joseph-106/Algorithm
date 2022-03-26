function solution(a, b, c) {
  let max = a;
  max = b > max ? b : max;
  max = c > max ? c : max;
  return max;
}

console.log(solution(2, 5, 1));

// function solution(a, b, c) {
//   let answer;
//   if (a < b) answer = a;
//   else answer = b;
//   if (c < answer) answer = c;
//   return answer;
// }
