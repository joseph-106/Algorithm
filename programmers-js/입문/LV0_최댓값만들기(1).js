function solution(numbers) {
  const sortedNumbers = [...numbers].sort((a, b) => b - a);
  const max = sortedNumbers[0] * sortedNumbers[1];

  return max;
}
