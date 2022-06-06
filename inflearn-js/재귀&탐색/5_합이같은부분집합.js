function solution(arr) {
  const subsetSumArr = [];
  const recursive = (num, subsetSum) => {
    if (num < arr.length) {
      recursive(num + 1, subsetSum);
      subsetSum += arr[num];
      subsetSumArr.push(subsetSum);
      recursive(num + 1, subsetSum);
    }
  };
  recursive(0, 0);
  return subsetSumArr.length === [...new Set(subsetSumArr)].length
    ? "NO"
    : "YES";
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

/* function solution(arr) {
  let answer = "NO",
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
} */
