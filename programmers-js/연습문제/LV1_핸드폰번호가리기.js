// 연습문제

function solution(phone_number) {
  // 전화번호 하나씩 배열에 담기
  const arr = phone_number.split("");

  // splice로 배열의 일정 범위를 추출하고 join으로 문자열로 반환
  const answer =
    "*".repeat(arr.length - 4) + arr.splice(arr.length - 4, 4).join("");
  return answer;

  // 배열 안쓰고 풀기
  // const answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
