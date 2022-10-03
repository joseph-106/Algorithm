// 월간 코드 챌린지 시즌1

function solution(s) {
  let [count, zeroCount] = [0, 0];
  while (s !== "1") {
    count++;
    zeroCount += s.split("0").length - 1;
    s = s.replaceAll("0", "").length.toString(2);
  }
  return [count, zeroCount];
}
