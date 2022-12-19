function solution(X, Y) {
  const hashX = new Map();
  const hashY = new Map();
  let res = "";

  [...X].forEach((num) =>
    hashX.set(num, hashX.has(num) ? hashX.get(num) + 1 : 1)
  );
  [...Y].forEach((num) =>
    hashY.set(num, hashY.has(num) ? hashY.get(num) + 1 : 1)
  );

  [...new Set(X)]
    .sort((a, b) => b - a)
    .forEach((num) => {
      if (hashX.has(num) && hashY.has(num)) {
        res += num.repeat(Math.min(hashX.get(num), hashY.get(num)));
      }
    });

  return !res ? "-1" : Number(res) === 0 ? "0" : res;
}
