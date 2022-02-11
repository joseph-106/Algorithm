// 연습문제

function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    answer += i % 2 ? "박" : "수";
  }
  return answer;
}

// n번 반복시키고 n만큼 자르기
// const solution = n => "수박".repeat(n).slice(0,n);
