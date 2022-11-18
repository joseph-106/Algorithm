function solution(numbers) {
  const NUMBERS = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  NUMBERS.forEach(
    (NUMBER) => (numbers = numbers.replaceAll(NUMBER, NUMBERS.indexOf(NUMBER)))
  );

  return Number(numbers);
}
