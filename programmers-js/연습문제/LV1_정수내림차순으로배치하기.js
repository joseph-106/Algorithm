// 연습문제

function solution(n) {
  // 숫자를 문자 배열로 쪼개고 오름차순 정렬
  const arr = n
    .toString()
    .split("")
    .sort((a, b) => a - b);
  let answer = 0;
  // 10**i씩 곱해서 더해주면 내림차순 정수
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i] * 10 ** i;
  }
  return answer;
}
