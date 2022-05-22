// 재귀 함수
function solution(n) {
  let binary = "";
  const recursive = (num) => {
    binary = (num % 2) + binary;
    if (num >= 2) recursive(Math.floor(num / 2));
    return binary;
  };
  return recursive(n);
}

/* function solution(n) {
  return n.toString(2);
} */

console.log(solution(11));

/* function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
} */
