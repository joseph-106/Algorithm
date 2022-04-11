function solution(arr) {
  let score = 0;
  let temp = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      score += temp;
      temp += 1;
    } else temp = 1;
  }
  return score;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

/* function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
} */
