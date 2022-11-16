function solution(s) {
  const numbers = [];

  s.split(" ").forEach((ch) => {
    ch === "Z" ? numbers.pop() : numbers.push(Number(ch));
  });

  return numbers.reduce((acc, cur) => acc + cur, 0);
}
