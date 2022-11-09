function solution(num_list) {
  return num_list.reduce(
    ([evenCount, oddCount], num) => {
      return [
        num % 2 === 0 ? evenCount + 1 : evenCount,
        num % 2 === 1 ? oddCount + 1 : oddCount,
      ];
    },
    [0, 0]
  );
}
