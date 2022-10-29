function solution(n, s) {
  const [num, remain] = [Math.floor(s / n), s % n];
  const res = Array(n - remain).fill(num);
  if (num === 0) return [-1];
  for (let i = 0; i < remain; i++) res.push(num + 1);
  return res;
}
