function solution(s) {
  let result = "";
  const tempArr = [];
  for (let x of s) {
    if (!tempArr.includes(x)) {
      tempArr.push(x);
      result += x;
    }
  }
  return result;
}

console.log(solution("ksekkset"));

// s.indexOf("k") ~ 문자열에서 해당 문자의 첫 번째 인덱스 반환

/* function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
} */
