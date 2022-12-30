function solution(n) {
  return fibonacci(n) % 1000000007;
}

const fibonacci = (n) => {
  const arr = [1, 1];

  for (let i = 2; i <= n; i++) arr[i % 2] = (arr[0] + arr[1]) % 1000000007;

  return n % 2 === 0 ? arr[0] : arr[1];
};
