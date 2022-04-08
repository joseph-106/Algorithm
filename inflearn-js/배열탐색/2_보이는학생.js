function solution(arr) {
  let highest = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      count++;
      highest = arr[i];
    }
  }
  return count;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

/* function solution(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
} */
