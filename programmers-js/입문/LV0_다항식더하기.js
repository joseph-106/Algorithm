function solution(polynomial) {
  let [x, num] = [0, 0];

  polynomial.split(" + ").forEach((e) => {
    !e.includes("x")
      ? (num += Number(e))
      : (x += e === "x" ? 1 : Number(e.slice(0, -1)));
  });

  if (x === 1) return num ? `x + ${num}` : "x";

  return x && num ? `${x}x + ${num}` : x ? `${x}x` : `${num}`;
}
