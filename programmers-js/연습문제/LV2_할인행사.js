function solution(want, number, discount) {
  const PERIOD = 10;
  let count = 0;

  for (let i = 0; i <= discount.length - PERIOD; i++) {
    const items = discount.slice(i, i + PERIOD);

    for (let j = 0; j < want.length; j++) {
      if (items.filter((item) => item === want[j]).length !== number[j]) break;
      if (j === want.length - 1) count += 1;
    }
  }

  return count;
}
