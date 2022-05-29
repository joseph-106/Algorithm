function solution(n, m) {
  const resultArr = [];
  const recursive = (num, temp) => {
    if (num <= m) for (let i = 1; i <= n; i++) recursive(num + 1, temp + i);
    else resultArr.push(temp.split("").map(Number));
  };
  recursive(1, "");
  return resultArr;
}

console.log(solution(3, 2));

/* function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
} */
