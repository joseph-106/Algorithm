function solution(array) {
  const hashMap = new Map();

  array.forEach((num) =>
    hashMap.set(num, hashMap.get(num) ? hashMap.get(num) + 1 : 1)
  );

  const sortedArr = [...hashMap.entries()].sort((a, b) => b[1] - a[1]);

  return sortedArr.length === 1 || sortedArr[0][1] !== sortedArr[1][1]
    ? sortedArr[0][0]
    : -1;
}
