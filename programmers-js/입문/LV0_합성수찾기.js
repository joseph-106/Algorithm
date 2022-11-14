function solution(n) {
  let primeNumberCount = 0;

  const isPrimeNumber = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= n; i++) {
    if (isPrimeNumber(i)) primeNumberCount += 1;
  }

  const compositionNumberCount = n - primeNumberCount - 1;

  return compositionNumberCount;
}
