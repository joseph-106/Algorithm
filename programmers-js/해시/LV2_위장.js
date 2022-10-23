function solution(clothes) {
  let count = 1;
  const hashMap = new Map();
  clothes.forEach((cloth) =>
    hashMap.set(cloth[1], hashMap.has(cloth[1]) ? hashMap.get(cloth[1]) + 1 : 1)
  );
  for (const value of hashMap.values()) count *= value + 1;
  return count - 1;
}
