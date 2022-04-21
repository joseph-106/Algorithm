function solution(test) {
  let count = 0;
  for (let i = 1; i <= test[0].length; i++) {
    for (let j = 1; j <= test[0].length; j++) {
      let flag = 1;
      if (i === j) flag = 0;
      for (let k = 0; k < test.length; k++) {
        if (test[k].indexOf(i) > test[k].indexOf(j)) flag = 0;
      }
      if (flag) count++;
    }
  }
  return count;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

/* function solution(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
} */
