function solution(k, score) {
  const hof = [];

  return score.map((s) => {
    if (hof.length === k) {
      const min = Math.min(...hof);

      if (s > min) {
        hof.sort((a, b) => b - a);
        hof.pop();

        hof.push(s);
      }
    } else hof.push(s);

    return Math.min(...hof);
  });
}
