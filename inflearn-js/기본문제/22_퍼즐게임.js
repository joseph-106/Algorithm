function solution(nums) {
  let dy = Array.from(Array(nums.length), () => Array(nums.length).fill(0));
  for (let j = 2; j < nums.length; j++) {
    for (let i = 0; i < nums.length - j; i++) {
      dy[i][i + j] = Number.MAX_SAFE_INTEGER;
      for (let k = i + 1; k < i + j; k++) {
        dy[i][i + j] = Math.min(
          dy[i][i + j],
          dy[i][k] + dy[k][i + j] + nums[i] * nums[k] * nums[i + j]
        );
      }
    }
  }
  return dy[0][nums.length - 1];
}

/* 시간 초과
function solution(nums) {
  let min = Number.MAX_SAFE_INTEGER;
  const recursive = (point, tempArr) => {
    if (tempArr.length === 2) min = Math.min(point, min);
    if (point < min && tempArr.length > 2) {
      for (let i = 1; i < tempArr.length - 1; i++) {
        const copy = [...tempArr];
        copy.splice(i, 1);
        recursive(point + tempArr[i - 1] * tempArr[i] * tempArr[i + 1], copy);
      }
    }
  };
  recursive(0, nums);
  return min;
} */

console.log(solution([10, 1, 50, 50, 20, 5])); //3650
console.log(
  solution([
    98, 56, 77, 19, 20, 85, 81, 72, 59, 19, 5, 40, 20, 55, 16, 63, 50, 59, 20,
    9,
  ])
); //217795
console.log(
  solution([
    92, 80, 50, 59, 31, 57, 38, 85, 43, 33, 16, 17, 88, 78, 28, 48, 8, 34, 75,
    97, 52, 30, 38, 32, 78, 55, 36, 55, 39, 61,
  ])
); //645848

/* function solution(nums) {
  let n = nums.length;
  let dy = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = 1; i < n - 1; i++) {
    dy[i - 1][i + 1] = nums[i - 1] * nums[i] * nums[i + 1];
  }
  for (let j = 2; j < n; j++) {
    for (let i = 0; i < n - j; i++) {
      dy[i][i + j] = 2147000000;
      for (let k = i + 1; k < i + j; k++) {
        dy[i][i + j] = Math.min(
          dy[i][i + j],
          dy[i][k] + dy[k][i + j] + nums[i] * nums[k] * nums[i + j]
        );
      }
    }
  }
  return dy[0][n - 1];
} */
