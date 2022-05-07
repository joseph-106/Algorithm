function solution(n, k) {
  const princeArr = [];
  for (let i = 1; i <= n; i++) {
    princeArr.push(i);
  }
  let count = 0;
  while (true) {
    for (let i = 0; i < princeArr.length; i++) {
      count++;
      if (count === k) {
        princeArr.splice(i, 1);
        i--;
        count = 0;
      }
      if (princeArr.length === 1) return princeArr.pop();
    }
  }
}

console.log(solution(8, 3));

/* function solution(n, k) {
  let answer;
  // 연속된 규칙의 배열 생성
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  // 큐의 성질을 이용해 순환
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
} */
