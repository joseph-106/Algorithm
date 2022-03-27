function solution(arr) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum += arr[i];
      min = arr[i] < min ? arr[i] : min;
    }
  }
  return [sum, min];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// function solution(arr) {
//   let answer = [];
//   let sum = 0,
//     min = Number.MAX_SAFE_INTEGER;
//   for (let x of arr) {
//     if (x % 2 === 1) {
//       sum += x;
//       if (x < min) min = x;
//     }
//   }
//   answer.push(sum);
//   answer.push(min);
//   return answer;
// }
