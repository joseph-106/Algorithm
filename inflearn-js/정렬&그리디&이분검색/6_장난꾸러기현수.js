function solution(arr) {
  const numberArr = [];
  const sortedArr = [...arr].sort((a, b) => a - b);
  arr.forEach((e, i) => {
    if (e !== sortedArr[i]) numberArr.push(i + 1);
  });
  return numberArr;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

/* function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
} */
