function solution(arr) {
  const sumArr = [];
  let diagonal_1 = 0;
  let diagonal_2 = 0;
  for (let i = 0; i < arr.length; i++) {
    let columnSum = 0;
    sumArr.push(arr[i].reduce((acc, cur) => acc + cur));
    for (let j = 0; j < arr.length; j++) {
      columnSum += arr[j][i];
    }
    sumArr.push(columnSum);
    diagonal_1 += arr[i][i];
    diagonal_2 += arr[i][arr.length - 1 - i];
  }
  return Math.max(...sumArr, diagonal_1, diagonal_2);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

/* function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
} */
