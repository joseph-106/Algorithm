// 연습문제

function solution(arr) {
  // 배열의 총합 구하고 길이로 나누기
  return (
    arr.reduce((acc, cur) => {
      return acc + cur;
    }) / arr.length
  );
}
