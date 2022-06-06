function solution(c, arr) {
  let max = Number.MIN_SAFE_INTEGER;
  const recursive = (n, sum) => {
    if (n < arr.length) {
      recursive(n + 1, sum);
      sum += arr[n];
      if ((max < sum) & (sum < c)) max = sum;
      recursive(n + 1, sum);
    }
  };
  recursive(0, 0);
  return max;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));

/* function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
} */
