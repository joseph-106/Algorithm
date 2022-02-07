// 연습문제

function solution(n) {
  // 숫자 배열로 바꾸고 reduce로 총합 구하기
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}
