function solution(s, t) {
  return s.split("").filter((e) => e === t).length;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// function solution(s, t) {
//   let answer = 0;
//   for (let x of s) {
//     if (x === t) answer++;
//   }
//   return answer;
// }

// function solution(s, t) {
//   return s.split(t).length - 1;
// }
