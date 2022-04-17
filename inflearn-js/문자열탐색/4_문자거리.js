function solution(s, t) {
  let distance = "";
  let count = 0;
  for (x of s) {
    if (x === t) {
      count = 0;
      distance += count;
    } else {
      count++;
      distance += count;
    }
  }
  const distanceArr = distance.split("0");
  distanceArr[0] = distanceArr[0].split("").reverse().join("");
  for (let i = 1; i < distanceArr.length; i++) {
    for (let j = 0; j < distanceArr[i].length / 2; j++) {
      distanceArr[i] = distanceArr[i].replace(
        distanceArr[i][distanceArr[i].length - 1 - j],
        distanceArr[i][j]
      );
    }
  }
  return distanceArr.join("0").split("").map(Number);
}

let str = "teachermode";
console.log(solution(str, "e"));

/* function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  // 거꾸로 순회
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      // 더 작은 값으로 교체
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
} */
