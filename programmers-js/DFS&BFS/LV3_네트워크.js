function solution(n, computers) {
  let count = 0;
  const recursive = (num) => {
    for (let i = 0; i < n; i++) {
      if (computers[num][i] === 1) {
        computers[num][i] = 0;
        if (num !== i) recursive(i);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (computers[i][j] === 1) {
        recursive(i);
        count++;
      }
    }
  }
  return count;
}
