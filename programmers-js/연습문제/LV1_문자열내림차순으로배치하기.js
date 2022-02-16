// 연습문제

function solution(s) {
  // 배열로 쪼개고 오름차순 정렬을 뒤집고 문자열로 합치기
  return s.split("").sort().reverse().join("");
}
