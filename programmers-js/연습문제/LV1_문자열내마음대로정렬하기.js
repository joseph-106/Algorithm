// 연습문제

function solution(strings, n) {
  return (
    strings
      // map으로 n번째 글자 맨 앞에 붙이고
      .map((e) => e[n] + e)
      // 정렬하고
      .sort()
      // slice에 시작값만 넣어서 맨 앞 글자 제거
      .map((e) => e.slice(1))
  );
}
