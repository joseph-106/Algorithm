function solution(n) {
  let count = 0;
  const recursive = (temp) => {
    if (temp === n + 1) count++;
    if (temp <= n) {
      recursive(temp + 1);
      recursive(temp + 2);
    }
  };
  recursive(0);
  return count;
}

console.log(solution(7));

/* function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n + 1];
  return answer;
} */
