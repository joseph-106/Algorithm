function solution(num, total) {
  const average = Math.floor(total / num);

  return Array.from({ length: num }, (_, i) => {
    const temp = average + i - Math.floor(num / 2);

    return num % 2 === 0 ? temp + 1 : temp;
  });
}
