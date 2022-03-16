// 월간 코드 챌린지 시즌2

function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => (acc += signs[i] ? cur : -cur), 0);
}
