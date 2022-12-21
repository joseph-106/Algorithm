// Summer/Winter Coding(~2018)

function solution(A, B) {
  const sortedA = [...A].sort((a, b) => a - b);
  const sortedB = [...B].sort((a, b) => a - b);
  let [index, point] = [0, 0];

  sortedB.forEach((b) => {
    const a = sortedA[index];

    if (b > a) {
      index += 1;
      point += 1;
    }
  });

  return point;
}
