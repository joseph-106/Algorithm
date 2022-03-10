// 완전탐색

function solution(answers) {
  const num1 = [];
  const num2 = [];
  const num3 = [];
  while (num1.length < answers.length) {
    num1.push(...[1, 2, 3, 4, 5]);
  }
  while (num2.length < answers.length) {
    num2.push(...[2, 1, 2, 3, 2, 4, 2, 5]);
  }
  while (num3.length < answers.length) {
    num3.push(...[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);
  }
  let num1count = 0;
  let num2count = 0;
  let num3count = 0;
  for (let i = 0; i < answers.length; i++) {
    num1count += num1[i] === answers[i] ? 1 : 0;
    num2count += num2[i] === answers[i] ? 1 : 0;
    num3count += num3[i] === answers[i] ? 1 : 0;
  }
  const sorted = [
    [1, num1count],
    [2, num2count],
    [3, num3count],
  ].sort((a, b) => b[1] - a[1]);
  if ((sorted[0][1] === sorted[1][1]) & (sorted[1][1] === sorted[2][1])) {
    return [sorted[0][0], sorted[1][0], sorted[2][0]];
  } else if (sorted[0][1] === sorted[1][1]) {
    return [sorted[0][0], sorted[1][0]];
  } else {
    return [sorted[0][0]];
  }
}
