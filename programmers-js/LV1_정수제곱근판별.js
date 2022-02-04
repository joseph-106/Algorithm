// 연습문제

function solution(n) {
  // Math.sqrt로 제곱근 반환
  return Math.sqrt(n) % 1 == 0 ? (Math.sqrt(n) + 1) ** 2 : -1;
}
