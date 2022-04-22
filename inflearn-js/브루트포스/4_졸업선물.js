function solution(m, product) {
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  const countArr = [];
  for (let i = 0; i < product.length; i++) {
    let sum = product[i][0] / 2 + product[i][1];
    let count = 1;
    for (let j = 0; j < product.length; j++) {
      if (j !== i) {
        sum += product[j][0] + product[j][1];
        count++;
      }
      if (sum > m) {
        countArr.push(count - 1);
        break;
      }
    }
  }
  return Math.max(...countArr);
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

/* function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
} */
