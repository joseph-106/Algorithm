// 해시

function solution(participant, completion) {
  // sort 함수는 원본을 변경
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
