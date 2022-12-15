function solution(maps) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const row = maps.length - 1,
    col = maps[0].length - 1;
  const queue = [[0, 0, 1]];

  const isOut = (nextY, nextX, row, col) =>
    nextY < 0 || nextX < 0 || nextY > row || nextX > col;

  while (queue.length) {
    let [y, x, count] = queue.shift();

    if (y === row && x === col) return count;

    for (let i = 0; i < 4; i++) {
      const [dy, dx] = directions[i];
      const ny = dy + y,
        nx = dx + x;

      if (isOut(ny, nx, row, col)) continue;
      if (maps[ny][nx] === 0) continue;

      maps[ny][nx] = 0;
      queue.push([ny, nx, count + 1]);
    }
  }

  return -1;
}
