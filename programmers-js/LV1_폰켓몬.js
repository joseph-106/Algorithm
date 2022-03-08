// 찾아라 프로그래밍 마에스터

function solution(nums) {
  // [...new Set(arr)]로 배열 중복 제거
  return nums.length / 2 < [...new Set(nums)].length
    ? nums.length / 2
    : [...new Set(nums)].length;
}
