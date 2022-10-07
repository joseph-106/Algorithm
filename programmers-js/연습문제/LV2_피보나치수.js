function solution(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) arr[i % 2] = (arr[0] + arr[1]) % 1234567;
  return n % 2 === 0 ? arr[0] : arr[1];
}
