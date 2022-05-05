function solution(board, moves) {
  const basket = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        basket.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  let count = 0;
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < basket.length; i++) {
      if (basket[i] === basket[i + 1]) {
        basket.splice(i, 2);
        count += 2;
        flag = true;
      }
    }
  }
  return count;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

/* function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });
  return answer;
} */
