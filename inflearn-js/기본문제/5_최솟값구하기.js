function solution(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
  }
  return min;
}

// 내장함수 사용
function solution(arr) {
  return Math.min(...arr);
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

// function solution(arr) {
//   let answer,
//     // 안정적인 큰 값으로 초기값 선언
//     min = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   answer = min;
//   return answer;
// }
