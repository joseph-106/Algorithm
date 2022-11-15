function solution(my_string) {
  const numbers = my_string
    .split("")
    .map(Number)
    .filter((ch) => !isNaN(ch));
  const sortedNumbers = [...numbers].sort((a, b) => a - b);

  return sortedNumbers;
}
