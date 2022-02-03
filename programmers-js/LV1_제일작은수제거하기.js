// 연습문제

function solution(arr) {
  // Math.min으로 제일 작은 수 반환
  const min = Math.min(...arr);
  // filter로 배열에서 제일 작은 수 제거
  return arr.length == 1 ? [-1] : arr.filter((e) => e != min);
}
