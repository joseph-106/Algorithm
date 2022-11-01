function solution(n, computers) {
  let count = 0;
  const recursive = (num, loc) => {
    for (let i = loc; i < n; i++) {
      if (computers[num][i] === 1) {
        computers[num][i] = 0;
        if (num !== i) recursive(i, 0);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1) {
        recursive(i, 0);
        count++;
      }
    }
  }
  return count;
}
