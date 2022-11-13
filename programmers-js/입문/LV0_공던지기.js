function solution(numbers, k) {
  const [total, len] = [k * 2 - 1, numbers.length];

  return numbers[(total % len) - 1];
}
