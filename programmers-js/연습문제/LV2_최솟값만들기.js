function solution(A, B) {
  let sum = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  while (A.length) sum += A.pop() * B.pop();
  return sum;
}
