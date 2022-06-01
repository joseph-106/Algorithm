function solution(n) {
  let result = 1;
  const recursive = (num) => {
    if (num > 1) {
      result *= num;
      recursive(num - 1);
    }
  };
  recursive(n);
  return result;
}

console.log(solution(5));

/* function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
} */
