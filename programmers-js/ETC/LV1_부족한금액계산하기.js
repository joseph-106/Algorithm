// 위클리 챌린지

function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  return sum - money < 0 ? 0 : sum - money;
}
