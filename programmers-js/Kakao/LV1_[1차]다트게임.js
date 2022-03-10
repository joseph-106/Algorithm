// 2018 KAKAO BLIND RECRUITMENT

function solution(dartResult) {
  const arr = [];
  let temp = 0;
  for (let i = 0; i < dartResult.length; i++) {
    // isNaN으로 문자가 숫자 형태인지 확인
    if (!isNaN(dartResult[i])) {
      if (dartResult[i] === "0") {
        // 10인 경우 예외처리
        temp = dartResult[i - 1] === "1" ? 10 : 0;
      } else {
        // 동적 타입 변환 필요
        temp = dartResult[i];
      }
    } else if (dartResult[i] === "S") {
      if (dartResult[i + 1] === "*") {
        arr.push(temp * 2);
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
  // 숫자 배열의 총합
  return arr.reduce((acc, cur) => acc + cur);
}
