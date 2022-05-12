function solution(arr) {
  return [...arr.filter((e) => e < 0), ...arr.filter((e) => e > 0)];
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

// 버블 정렬 알고리즘 응용
/* function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
} */

/* function solution(arr) {
  let answer = [];
  for (let x of arr) {
    if (x < 0) answer.push(x);
  }
  for (let x of arr) {
    if (x > 0) answer.push(x);
  }
  return answer;
} */
