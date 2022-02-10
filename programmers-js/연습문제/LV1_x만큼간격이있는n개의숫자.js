// 연습문제

function solution(x, n) {
  let answer = [];

  // 배열에 n번 push ~ [x * 1, x * 2, ... x * n]
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
