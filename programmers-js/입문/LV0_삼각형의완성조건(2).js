function solution(sides) {
  let count = 0;

  sides.sort((a, b) => a - b);
  for (let i = sides[1] - sides[0] + 1; i <= sides[1]; i++) count += 1;
  for (let i = sides[1] + 1; i < sides[0] + sides[1]; i++) count += 1;

  return count;
}
