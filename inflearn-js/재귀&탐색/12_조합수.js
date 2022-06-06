function solution(n, r) {
  const factorial = (num) => {
    let result = 1;
    const recursive = (num) => {
      if (num > 1) {
        result *= num;
        recursive(num - 1);
      }
    };
    recursive(num);
    return result;
  };
  return factorial(n) / factorial(n - r) / factorial(r);
}

console.log(solution(5, 3));

/* function solution(n, r) {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
} */
