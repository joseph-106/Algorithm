function solution(my_string, n) {
  return [...my_string].map((ch) => ch.repeat(n)).join("");
}
