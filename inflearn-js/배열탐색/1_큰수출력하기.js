function solution(arr) {
  const resultArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) resultArr.push(arr[i]);
  }
  return resultArr;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

/* function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
} */
