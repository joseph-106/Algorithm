function solution(my_string) {
  const isUpperCase = (ch) => ch === ch.toUpperCase();

  return [...my_string]
    .map((ch) => (isUpperCase(ch) ? ch.toLowerCase() : ch.toUpperCase()))
    .join("");
}
