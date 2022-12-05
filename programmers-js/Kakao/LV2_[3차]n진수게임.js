// 2018 KAKAO BLIND RECRUITMENT

function solution(n, t, m, p) {
  const [res, nums] = [[], []];
  let [num, loc] = [0, p - 1];

  while (res.length < t) {
    nums.push(...num.toString(n).split(""));

    while (loc < nums.length - 1) {
      res.push(nums[loc]);
      loc += m;
    }

    num += 1;
  }

  return res.join("").toUpperCase();
}
