// 연습문제

function solution(x) {
  // x를 숫자 배열로 만들고 reduce로 총합 구하기
  const arr = x.toString().split("").map(Number);
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  });
  return x % sum == 0;
}
