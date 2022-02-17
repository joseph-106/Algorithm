// 연습문제

function solution(s) {
  // true가 acc 초기값 0에 더해지면서 1로 변환됨
  return (
    s.split("").reduce((acc, cur) => acc + (cur.toLowerCase() === "p"), 0) ===
    s.split("").reduce((acc, cur) => acc + (cur.toLowerCase() === "y"), 0)
  );

  // split에 separator를 넣어주는 방법 (return되는 배열의 길이는 separator의 개수 + 1)
  // return s.toLowerCase().split("p").length === s.toLowerCase().split("y").length;
}
