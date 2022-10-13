function solution(arr) {
  const findMax = (a, b) => {
    let max = 1;
    for (let i = 1; i <= a; i++) if (a % i === 0 && b % i === 0) max = i;
    return max;
  };
  const findMin = (a, b) => (a * b) / findMax(a, b);
  return arr.reduce((acc, cur) => findMin(acc, cur));
}
