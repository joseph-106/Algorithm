// 연습문제

function solution(s) {
  // 숫자로 인식되는 e 예외처리
  if (s.includes("e")) return false;
  // 변환 값이 NaN(=false)이 아니라면 숫자로만 구성된 문자열
  return (+s && s.length === 4) || (+s && s.length === 6) ? true : false;
}
