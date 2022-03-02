// 월간 코드 챌린지 시즌1

function solution(n) {
  // parseInt(string, radix)는 문자열을 파싱해 특정 진수의 정수를 반환
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
