// 2020 KAKAO BLIND RECRUITMENT

function solution(id_list, report, k) {
  // 배열 중복 제거, map 함수에 split으로 2차원 배열 생성
  report = [...new Set(report)].map((e) => e.split(" "));
  const reportedObj = {};
  for (let i = 0; i < report.length; i++) {
    // 객체에 값이 존재한다면
    report[i][1] in reportedObj
      ? (reportedObj[report[i][1]] += 1)
      : (reportedObj[report[i][1]] = 1);
  }
  const stoppedArr = [];
  // 객체 순회
  for (let id in reportedObj) {
    if (reportedObj[id] >= k) {
      stoppedArr.push(id);
    }
  }
  const mailArr = [];
  for (let i = 0; i < report.length; i++) {
    if (stoppedArr.includes(report[i][1])) {
      mailArr.push(report[i][0]);
    }
  }
  const answer = [];
  for (let i = 0; i < id_list.length; i++) {
    let count = 0;
    for (let j = 0; j < mailArr.length; j++) {
      if (mailArr[j] === id_list[i]) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
}
