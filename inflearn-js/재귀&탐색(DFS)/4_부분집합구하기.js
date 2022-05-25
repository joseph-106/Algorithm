function solution(n) {
  const subsetArr = [];
  const recursive = (num, subset) => {
    if (0 < num) {
      recursive(num - 1, subset);
      subset = num + " " + subset;
      subsetArr.push(subset.trim());
      recursive(num - 1, subset);
    }
  };
  recursive(n, "");
  return subsetArr;
}

console.log(solution(3));

/* function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(L) {
    if (L === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(1);
  return answer;
} */
