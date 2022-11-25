function solution(lines) {
  const overlap = new Set();
  const findOverlap = (a, b) =>
    lines[a].forEach((num) => {
      if (
        lines[a].includes(num + 1) &&
        lines[b].includes(num) &&
        lines[b].includes(num + 1)
      )
        overlap.add(num);
    });

  lines = lines.map((line) =>
    Array.from({ length: line[1] - line[0] + 1 }, (_, i) => line[0] + i)
  );

  findOverlap(0, 1);
  findOverlap(0, 2);
  findOverlap(1, 2);

  return overlap.size;
}
