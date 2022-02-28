// 연습문제

function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // Date 객체의 getDay 메서드로 날짜가 무슨 요일인지 숫자값으로 반환
  return day[new Date(`2016-${a}-${b}`).getDay()];
}
