// 2020 KAKAO BLIND RECRUITMENT

function solution(id_list, report, k) {
  // report 배열 중복값 제거
  const newReport = [...new Set(report)];

  // 문자열 공백 기준으로 자르는 함수
  function Slice(id) {
    return id.split(" ");
  }

  // newReport 공백 기준으로 자르기 - 2차원 배열
  const newReportList = newReport.map(Slice);

  // 신고받은 id를 받는 배열
  const reportedId = [];

  // 2차원 배열에서 신고받은 id 추출해서 reportedId에 추가
  for (var i = 0; i < newReportList.length; i++) {
    reportedId.push(newReportList[i][1]);
  }

  // 신고받은 id와 횟수를 받는 객체
  const reportedIdCount = {};

  // 배열 중복 값 개수 구하기
  reportedId.forEach((x) => {
    reportedIdCount[x] = (reportedIdCount[x] || 0) + 1;
  });

  // 정지된 id를 받는 배열
  const stoppedId = [];

  // k번 이상 신고당한 id를 stoppedId에 추가
  for (var i in reportedIdCount) {
    if (reportedIdCount[i] >= k) {
      stoppedId.push(i);
    }
  }

  // 메일을 보낼 id를 담는 배열
  const sendMailId = [];

  // 이중 반복문으로 메일을 보낼 id를 sendMailId에 추가
  for (var i = 0; i < stoppedId.length; i++) {
    for (var j = 0; j < newReportList.length; j++) {
      if (newReportList[j][1] == stoppedId[i]) {
        sendMailId.push(newReportList[j][0]);
      }
    }
  }

  // 정답을 담을 배열
  var answer = [];

  // id_list의 순서대로 sendMailId와 대조해 횟수를 answer에 추가
  for (var i = 0; i < id_list.length; i++) {
    var count = 0;
    for (var j = 0; j < sendMailId.length; j++) {
      if (id_list[i] == sendMailId[j]) {
        count++;
      }
    }
    answer.push(count);
  }

  return answer;
}
