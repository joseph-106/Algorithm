function solution(n, m) {
  const resultArr = [];
  const recursive = (temp, tempArr) => {
    if (tempArr.length === m) resultArr.push(tempArr);
    for (let i = temp; i <= n; i++) recursive(i + 1, [...tempArr, i]);
  };
  recursive(1, []);
  return resultArr;
}

console.log(solution(4, 2));

/* function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
} */
