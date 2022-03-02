// Summer/Winter Coding(~2018)

function solution(d, budget) {
  // 배열 오름차순 정렬
  const sort = d.sort((a, b) => a - b);
  for (let i = 0; i < sort.length; i++) {
    budget -= sort[i];
    if (budget < 0) {
      return i;
    }
  }
  return sort.length;
}
