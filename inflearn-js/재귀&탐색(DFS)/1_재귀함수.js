// 재귀 함수
function solution(n) {
  if (n !== 1) solution(n - 1);
  console.log(n);
}

solution(3);

/* function solution(n) {
  function DFS(L) {
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
} */
