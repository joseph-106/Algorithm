// 연습문제

function solution(phone_number) {
  // 전화번호 하나씩 배열에 담기
  var array = phone_number.split("");

  // splice로 배열의 일정 범위를 추출하고 join으로 문자열로 반환
  var answer =
    "*".repeat(array.length - 4) + array.splice(array.length - 4, 4).join("");
  return answer;
}
