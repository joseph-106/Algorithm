// 위클리 챌린지

function solution(sizes) {
  let width = [];
  let height = [];
  sizes.map(([a, b]) => {
    // 값 비교해서 push
    if (a > b) {
      width.push(a);
      height.push(b);
    } else {
      width.push(b);
      height.push(a);
    }
  });
  // 배열 전개하고 Math.max로 최대값 구하기
  return Math.max(...width) * Math.max(...height);
}
