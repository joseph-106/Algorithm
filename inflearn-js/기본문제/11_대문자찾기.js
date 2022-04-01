function solution(s) {
  let count = 0;
  // 문자열 하나씩 대입
  for (let x of s) {
    if (x === x.toUpperCase()) count++;
  }
  return count;
}

let str = "KoreaTimeGood";
console.log(solution(str));

// function solution(s) {
//   let answer = 0;
//   for (let x of s) {
//     // 아스키 코드 변환: 대문자(65~90)
//     if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) answer++;
//   }
//   return answer;
// }
