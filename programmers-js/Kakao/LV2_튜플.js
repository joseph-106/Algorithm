// 2019 카카오 개발자 겨울 인턴십

function solution(s) {
  const tempArr = [];
  s.slice(2, s.length - 2)
    .split("},{")
    .map((s) => s.split(","))
    .sort((a, b) => a.length - b.length)
    .forEach((arr) => tempArr.push(...arr));
  return [...new Set(tempArr)].map(Number);
}
