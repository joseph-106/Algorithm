function solution(dots) {
  const slopes = [];

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      slopes.push((dots[i][0] - dots[j][0]) / (dots[i][1] - dots[j][1]));
    }
  }

  return slopes.length === new Set(slopes).size ? 0 : 1;
}
