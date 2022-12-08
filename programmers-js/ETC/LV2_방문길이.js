// Summer/Winter Coding(~2018)

function solution(dirs) {
  const lines = new Set();
  const [min, max] = [-5, 5];
  let [x, y] = [0, 0];

  [...dirs].forEach((dir) => {
    const temp = `${x}${y}`;

    switch (dir) {
      case "U":
        if (y + 1 > max) return;
        y += 1;
        break;
      case "D":
        if (y - 1 < min) return;
        y -= 1;
        break;
      case "R":
        if (x + 1 > max) return;
        x += 1;
        break;
      case "L":
        if (x - 1 < min) return;
        x -= 1;
        break;
    }

    lines.add(temp + `${x}${y}`);
    lines.add(`${x}${y}` + temp);
  });

  return lines.size / 2;
}
