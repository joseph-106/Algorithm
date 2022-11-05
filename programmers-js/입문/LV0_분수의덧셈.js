function solution(denum1, num1, denum2, num2) {
  let [denum, num] = [denum1 * num2 + denum2 * num1, num1 * num2];
  for (let i = 2; i <= Math.min(denum, num); i++) {
    if (denum % i === 0 && num % i === 0) {
      [denum, num] = [denum / i, num / i];
      i--;
    }
  }
  return [denum, num];
}
