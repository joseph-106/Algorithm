function solution(board) {
  const height = board.length;
  const width = board[0].length;
  const directions = [
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
  ];
  let safe = height * width;

  const search = (i, j) => {
    directions.forEach((d) => {
      const di = i + d[0];
      const dj = j + d[1];
      if (
        0 <= di &&
        di < height &&
        0 <= dj &&
        dj < width &&
        board[di][dj] === 0
      ) {
        board[di][dj] = "x";
        safe -= 1;
      }
    });
  };

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] === 1) {
        safe -= 1;
        search(i, j);
      }
    }
  }

  return safe;
}
