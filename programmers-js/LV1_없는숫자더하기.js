// 월간 코드 챌린지 시즌3

function solution(numbers) {
  let sum = 0;
  for (let i = 0; i <= 9; i++) {
    sum += numbers.includes(i) ? 0 : i;
  }
  return sum;
}

// 역발상
// function solution(numbers) {
//   return 45 - numbers.reduce((acc, cur) => acc + cur);
// }
