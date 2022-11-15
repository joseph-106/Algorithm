function solution(n) {
  const factors = new Set();

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      n /= i;
      factors.add(i);
      i--;
    }
  }

  return [...factors];
}
