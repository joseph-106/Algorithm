// 연습문제

function solution(arr, divisor) {
  // filter or map
  const answer = [];
  arr.map((e) => e % divisor === 0 && answer.push(e));
  // length로 배열이 비어있는지 확인
  // 숫자 배열 오름차순 정렬 ~ sort((a, b) => a - b)
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
