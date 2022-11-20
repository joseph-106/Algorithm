function solution(num, k) {
  const index = String(num).indexOf(String(k)) + 1;

  return index ? index : index - 1;
}
