function solution(n, f) {
  const totalArr = [];
  const totalRecursive = (num, tempArr) => {
    if (num <= n) {
      for (let i = 1; i <= n; i++)
        if (!tempArr.includes(i)) totalRecursive(num + 1, [...tempArr, i]);
    } else totalArr.push(tempArr);
  };
  totalRecursive(1, []);
  const resultArr = [];
  totalArr.forEach((e) => {
    const resultRecursive = (tempArr) => {
      const sumArr = [];
      for (let i = 0; i < tempArr.length - 1; i++)
        sumArr.push(tempArr[i] + tempArr[i + 1]);
      if (sumArr.length === 1) {
        if (sumArr[0] === f) resultArr.push(e);
      } else resultRecursive(sumArr);
    };
    resultRecursive(e);
  });
  return resultArr[0];
}

console.log(solution(4, 16));

/* function solution(n, f) {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
} */
