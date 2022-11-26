// 월간 코드 챌린지 시즌2

function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count += 1;
      }
    }
    sum += count % 2 === 0 ? i : -i;
  }
  return sum;
}
