function solution(food) {
  const table = [];

  food.forEach((f, i) => {
    if (f >= 2) table.push(String(i).repeat(f / 2));
  });

  return [...table, "0", ...table.reverse()].join("");
}
