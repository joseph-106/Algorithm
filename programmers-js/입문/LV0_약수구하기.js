function solution(n) {
  const res = new Set();

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      res.add(i);
      res.add(n / i);
    }
  }

  return [...res].sort((a, b) => a - b);
}
