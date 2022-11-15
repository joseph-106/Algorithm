function solution(my_string) {
  const numbers = my_string
    .split("")
    .map(Number)
    .filter((ch) => !isNaN(ch));
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);

  return sum;
}
