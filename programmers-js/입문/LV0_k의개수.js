function solution(i, j, k) {
  let temp = "";

  for (let num = i; num <= j; num++) temp += num;

  return temp.split(k).length - 1;
}
