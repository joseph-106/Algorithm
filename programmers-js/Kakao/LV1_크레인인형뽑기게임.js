// 2019 카카오 개발자 겨울 인턴십

function solution(board, moves) {
  let score = 0;
  let basket = [];
  // 바구니 채우기
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        basket.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  // 반복 여부
  let loop = true;
  while (loop) {
    loop = false;
    for (let i = 0; i < basket.length; i++) {
      if (basket[i] === basket[i + 1]) {
        score += 2;
        basket.splice(i, 2);
        // 점수가 올랐다면 반복
        loop = true;
      }
    }
  }
  return score;
}
