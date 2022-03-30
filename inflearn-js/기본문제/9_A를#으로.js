function solution(s) {
  return s.replace(/A/g, "#"); // 정규표현식 global 옵션
}

let str = "BANANA";
console.log(solution(str));

// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     if (x == "A") answer += "#";
//     else answer += x;
//   }
//   return answer;
// }
