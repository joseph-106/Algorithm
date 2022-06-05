function solution(n, k, arr, m) {
  let count = 0;
  const recursive = (temp, tempArr) => {
    if (
      tempArr.length === k &&
      tempArr.reduce((acc, cur) => acc + cur, 0) % m === 0
    )
      count++;
    for (let i = temp; i < n; i++) recursive(i + 1, [...tempArr, arr[i]]);
  };
  recursive(0, []);
  return count;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));

/* function solution(n, k, arr, m) {
  let answer = 0;
  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
} */
