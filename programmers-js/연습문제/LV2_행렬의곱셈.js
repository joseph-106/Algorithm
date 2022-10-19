function solution(arr1, arr2) {
  const arr = Array.from({ length: arr1.length }, (e) =>
    new Array(arr2[0].length).fill(null)
  );
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      arr[i][j] = arr1[i].reduce(
        (acc, cur, index) => acc + cur * arr2[index][j],
        0
      );
    }
  }
  return arr;
}
