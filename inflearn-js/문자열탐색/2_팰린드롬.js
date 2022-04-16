function solution(s) {
  // 정규식으로 알파벳이 아닌 경우 치환
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  return s === s.split("").reverse().join("") ? "YES" : "NO";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

/* function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
} */
