function solution(common) {
  const [num1, num2, num3] = [common[0], common[1], common[2]];
  const last = common[common.length - 1];
  const isArithmetic = (common) => num2 * 2 === num1 + num3;

  return isArithmetic(common) ? last + num2 - num1 : last * (num2 / num1);
}
