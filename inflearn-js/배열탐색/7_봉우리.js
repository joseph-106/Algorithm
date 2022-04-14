function solution(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === 0) {
        if (j === 0) {
          if ((arr[i][j] > arr[i][j + 1]) & (arr[i][j] > arr[i + 1][j]))
            count++;
        } else if (j === arr.length - 1) {
          if ((arr[i][j] > arr[i][j - 1]) & (arr[i][j] > arr[i + 1][j]))
            count++;
        } else {
          if (
            (arr[i][j] > arr[i][j + 1]) &
            (arr[i][j] > arr[i][j - 1]) &
            (arr[i][j] > arr[i + 1][j])
          )
            count++;
        }
      } else if (i === arr.length - 1) {
        if (j === 0) {
          if ((arr[i][j] > arr[i][j + 1]) & (arr[i][j] > arr[i - 1][j]))
            count++;
        } else if (j === arr.length - 1) {
          if ((arr[i][j] > arr[i][j - 1]) & (arr[i][j] > arr[i - 1][j]))
            count++;
        } else {
          if (
            (arr[i][j] > arr[i][j + 1]) &
            (arr[i][j] > arr[i][j - 1]) &
            (arr[i][j] > arr[i - 1][j])
          )
            count++;
        }
      } else {
        if (j === 0) {
          if (
            (arr[i][j] > arr[i][j + 1]) &
            (arr[i][j] > arr[i + 1][j]) &
            (arr[i][j] > arr[i - 1][j])
          )
            count++;
        } else if (j === arr.length - 1) {
          if (
            (arr[i][j] > arr[i][j - 1]) &
            (arr[i][j] > arr[i + 1][j]) &
            (arr[i][j] > arr[i - 1][j])
          )
            count++;
        } else {
          if (
            (arr[i][j] > arr[i][j + 1]) &
            (arr[i][j] > arr[i][j - 1]) &
            (arr[i][j] > arr[i + 1][j]) &
            (arr[i][j] > arr[i - 1][j])
          )
            count++;
        }
      }
    }
  }
  return count;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));

/* function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      // 동서남북 비교
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          // 하나라도 큰 값이 있다면
          arr[nx][ny] >= arr[i][j]
        ) {
          // 플래그 끄고 반복문 탈출
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
} */
