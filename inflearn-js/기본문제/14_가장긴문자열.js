function solution(s) {
  let long = s[0];
  for (let i = 1; i < s.length; i++) {
    long = s[i].length > long.length ? s[i] : long;
  }
  return long;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

/* function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
} */
