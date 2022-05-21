function solution(c, stable) {
  let max;
  stable.sort((a, b) => a - b);
  let start = 1;
  let end = stable[stable.length - 1];
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let count = 1;
    let position = stable[0];
    stable.forEach((e) => {
      if (e - position >= mid) {
        count++;
        position = e;
      }
    });
    if (count >= c) {
      max = mid;
      start = mid + 1;
    } else end = mid - 1;
  }
  return max;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));

/* function count(stable, dist) {
  let cnt = 1,
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
} */
