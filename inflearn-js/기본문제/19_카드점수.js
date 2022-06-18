function solution(nums, k) {
  let max = Number.MIN_SAFE_INTEGER;
  const recursive = (left, right, sum) => {
    if (left + right < k) {
      recursive(left + 1, right, sum + nums[left]);
      recursive(left, right + 1, sum + nums[nums.length - right - 1]);
    } else if (sum > max) max = sum;
  };
  recursive(0, 0, 0);
  return max;
}

console.log(solution([3, 2, 5, 6, 7, 1], 3)); //14
console.log(solution([3, 1, 4, 5, 4, 1, 2, 5], 5)); //18
console.log(solution([6, 7, 1, 3, 1, 4, 3, 1, 1, 5, 4, 1, 2, 5], 10)); //35

/* function solution(nums, k) {
  let answer = nums.reduce((a, b) => a + b);
  let sum = 0;
  let remain = nums.length - k;
  for (let i = 0; i < remain; i++) {
    sum += nums[i];
  }
  let Nmin = sum;
  for (let i = remain; i < nums.length; i++) {
    sum += nums[i] - nums[i - remain];
    Nmin = Math.min(Nmin, sum);
  }
  return answer - Nmin;
} */
