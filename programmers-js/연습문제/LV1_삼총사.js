function solution(number) {
  let count = 0;
  const recursive = (sum, sumCount, loc) => {
    if (sumCount < 3)
      for (let i = loc; i < number.length; i++)
        recursive(sum + number[i], sumCount + 1, i + 1);
    else sum === 0 && count++;
  };
  recursive(0, 0, 0);
  return count;
}
