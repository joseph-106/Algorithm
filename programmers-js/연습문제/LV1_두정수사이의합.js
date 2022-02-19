// 연습문제

function solution(a, b) {
  let result = 0;
  // Math.abs로 절대값 반환
  for (let i = 0; i < Math.abs(a - b) + 1; i++) {
    result += a > b ? b + i : a + i;
  }
  return result;

  // 가우스 덧셈
  // return (a+b)*(Math.abs(b-a)+1)/2;
}
