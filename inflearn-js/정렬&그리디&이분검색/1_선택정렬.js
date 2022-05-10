// 선택 정렬 알고리즘
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    const min = Math.min(...arr.slice(i));
    const location = arr.indexOf(min);
    const temp = arr[i];
    arr[i] = min;
    arr[location] = temp;
  }
  return arr;
}

/* function solution(arr) {
  return arr.sort((a, b) => a - b);
} */

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

/* function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
} */
