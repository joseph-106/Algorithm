// 연습문제

// 1트) 효율성 테스트 실패
// 배열에서 삭제하는 경우, 요소들을 하나씩 앞당기는 연산이 추가됨
function solution(arr) {
  for (let i = arr.length; i > 0; i--) {
    // splice로 특정 위치의 배열 요소 삭제
    arr[i] === arr[i - 1] && arr.splice(i, 1);
  }
  return arr;
}

// 2트) 효율성 테스트 성공
function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] !== arr[i + 1] && answer.push(arr[i]);
  }
  return answer;

  // filter 활용
  // return arr.filter((e,i) => e != arr[i+1]);
}
