function solution(s) {
  return s.length % 2 === 0
    ? s.substr(s.length / 2 - 1, 2)
    : s.substr((s.length - 1) / 2, 1);
}

console.log(solution("study"));

// str.substr(시작 인덱스, 추출 갯수)
// str.substring(시작 인덱스번호, 끝 인덱스번호)

/* function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  //if(s.length%2===1) answer=s.substr(mid, 1);
  //else answer=s.substr(mid-1, 2);
  return answer;
} */
