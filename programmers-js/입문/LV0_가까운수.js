function solution(array, n) {
  const sortedNumbers = [...array, n].sort((a, b) => a - b);
  const index = sortedNumbers.findIndex((number) => number === n);

  if (index === 0) return sortedNumbers[1];
  if (index === array.length) return sortedNumbers[array.length - 1];

  const up = sortedNumbers[index + 1];
  const down = sortedNumbers[index - 1];

  return Math.abs(n - up) < Math.abs(n - down) ? up : down;
}
