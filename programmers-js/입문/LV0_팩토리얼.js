function solution(n) {
  const factorial = (number) => {
    const temp = Array.from({ length: number }, (_, i) => i + 1);

    return temp.reduce((acc, cur) => acc * cur, 1);
  };

  for (let i = 1; i <= 11; i++) {
    if (factorial(i) > n) return i - 1;
  }
}
