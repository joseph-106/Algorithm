// 탐욕법(Greedy)

function solution(n, lost, reserve) {
  // 일치하는 경우 배열에서 제거
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
      }
    }
  }
  let max = n - lost.length;
  reserve.forEach(function (e) {
    if (lost.includes(e + 1) | lost.includes(e - 1)) {
      max++;
    }
  });
  return max > n ? n : max;
}

// 객체를 활용하는 방법
// function solution(n, lost, reserve) {
//   const students = {};
//   let answer = 0;
//   for (let i = 1; i <= n; i++) {
//     students[i] = 1;
//   }
//   lost.forEach((number) => (students[number] -= 1));
//   reserve.forEach((number) => (students[number] += 1));

//   for (let i = 1; i <= n; i++) {
//     if (students[i] === 2 && students[i - 1] === 0) {
//       students[i - 1]++;
//       students[i]--;
//     } else if (students[i] === 2 && students[i + 1] === 0) {
//       students[i + 1]++;
//       students[i]--;
//     }
//   }
//   for (let key in students) {
//     if (students[key] >= 1) {
//       answer++;
//     }
//   }
//   return answer;
// }
