function solution(n, arr) {
  let max = [0, 0];
  for (let i = 0; i < n; i++) {
    const sum = String(arr[i])
      .split("")
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0);
    if (sum > max[0]) {
      max[0] = sum;
      max[1] = arr[i];
    } else if ((sum === max[0]) & (arr[i] > max[1])) {
      max[1] = arr[i];
    }
  }
  return max[1];
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

/* function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
} */
