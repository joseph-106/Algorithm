function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  const recursive = (tempArr, temp) => {
    for (let i = temp; i < arr.length; i++) {
      if (tempArr.length === 0) recursive([arr[i]], i);
      else if (arr[temp] < arr[i]) recursive([...tempArr, arr[i]], i);
    }
    if (tempArr.length > max) max = tempArr.length;
  };
  recursive([], 0);
  return max;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));

/* function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
} */
