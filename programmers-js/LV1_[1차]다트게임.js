// 2018 KAKAO BLIND RECRUITMENT

function solution(dartResult) {
  const arr = [];
  let temp = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      if (dartResult[i] === "0") {
        temp = dartResult[i - 1] === "1" ? 10 : 0;
      } else {
        temp = dartResult[i];
      }
    }
    if (dartResult[i] === "S") {
      if (dartResult[i + 1] === "*") {
        arr.push(+temp * 2);
        arr[arr.length - 2] *= 2;
      } else if (dartResult[i + 1] === "#") {
        arr.push(-temp);
      } else {
        arr.push(+temp);
      }
    } else if (dartResult[i] === "D") {
      if (dartResult[i + 1] === "*") {
        arr.push(temp ** 2 * 2);
        arr[arr.length - 2] *= 2;
      } else if (dartResult[i + 1] === "#") {
        arr.push(-(temp ** 2));
      } else {
        arr.push(temp ** 2);
      }
    } else if (dartResult[i] === "T") {
      if (dartResult[i + 1] === "*") {
        arr.push(temp ** 3 * 2);
        arr[arr.length - 2] *= 2;
      } else if (dartResult[i + 1] === "#") {
        arr.push(-(temp ** 3));
      } else {
        arr.push(temp ** 3);
      }
    }
  }
  return arr.reduce((acc, cur) => acc + cur);
}
