function solution(s) {
  s = s.toLowerCase();
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return "NO";
    }
  }
  return "YES";
}

let str = "goooG";
console.log(solution(str));

/* function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
} */
