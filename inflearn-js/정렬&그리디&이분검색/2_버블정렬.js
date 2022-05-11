// 버블 정렬 알고리즘
function solution(arr) {
  const sortedArr = [];
  while (arr.length !== 0) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    sortedArr.push(arr.shift());
  }
  return sortedArr;
}

/* function solution(arr) {
  return arr.sort((a, b) => a - b);
} */

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

/* function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
} */
