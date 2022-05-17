function solution(meeting) {
  meeting.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  for (let i = 0; i < meeting.length - 1; i++) {
    if (meeting[i + 1][0] < meeting[i][1]) {
      meeting.splice(i + 1, 1);
      i--;
    }
  }
  return meeting.length;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));

/* function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
} */
