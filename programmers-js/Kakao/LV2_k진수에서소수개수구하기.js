// 2022 KAKAO BLIND RECRUITMENT

function solution(n, k) {
  let count = 0;
  const numArr = n
    .toString(k)
    .split("0")
    .filter((num) => num !== "");
  numArr.forEach((num) => {
    let flag = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }
    flag && num !== "1" && count++;
  });
  return count;
}
