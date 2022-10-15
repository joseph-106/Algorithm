function solution(n) {
  if (n === 1) return 1;
  const arr = new Array(n).fill(0);
  [arr[0], arr[1]] = [1, 2];
  for (let i = 2; i < arr.length; i++)
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  return arr[arr.length - 1];
}
