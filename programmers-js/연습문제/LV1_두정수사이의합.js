// 연습문제

function solution(a, b) {
  const arr = [];
  // Math.abs로 절대값 반환
  for (let i = 0; i < Math.abs(a - b) + 1; i++) {
    a > b ? arr.push(b + i) : arr.push(a + i);
  }
  return arr.reduce((acc, cur) => acc + cur);

  // 배열 안쓰고 풀기
  // return (a+b)*(Math.abs(b-a)+1)/2;
}
