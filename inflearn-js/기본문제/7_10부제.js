function solution(day, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count +=
      String(day).split("").pop() === String(arr[i]).split("").pop() ? 1 : 0;
  }
  return count;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

// function solution(day, arr) {
//   let answer = 0;
//   for (let x of arr) {
//     if (x % 10 == day) answer++;
//   }
//   return answer;
// }
