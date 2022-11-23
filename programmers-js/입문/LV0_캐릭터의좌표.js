function solution(keyinput, board) {
  let [x, y] = [0, 0];
  const [xLimit, yLimit] = [board[0] / 2, board[1] / 2];

  keyinput.forEach((command) => {
    switch (command) {
      case "up":
        if (y + 1 < yLimit) y += 1;
        break;
      case "down":
        if (y - 1 > -yLimit) y -= 1;
        break;
      case "left":
        if (x - 1 > -xLimit) x -= 1;
        break;
      case "right":
        if (x + 1 < xLimit) x += 1;
        break;
    }
  });

  return [x, y];
}
