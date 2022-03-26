function solution(a, b, c) {
  let max = a;
  max = b > max ? b : max;
  max = c > max ? c : max;
  return a + b + c === 2 * max ? "NO" : "YES";
}

console.log(solution(13, 33, 17));

// function solution(a, b, c) {
//   let answer = "YES",
//     max;
//   let tot = a + b + c;
//   if (a > b) max = a;
//   else max = b;
//   if (c > max) max = c;
//   if (tot - max <= max) answer = "NO";
//   return answer;
// }
