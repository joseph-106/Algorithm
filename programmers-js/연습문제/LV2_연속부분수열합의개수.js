function solution(elements) {
  const sums = new Set();
  const newElements = [...elements, ...elements];

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j <= newElements.length - i; j++) {
      const sum = newElements
        .slice(j, j + i)
        .reduce((acc, cur) => acc + cur, 0);

      sums.add(sum);
    }
  }

  return sums.size;
}
