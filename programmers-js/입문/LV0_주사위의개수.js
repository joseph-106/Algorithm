function solution(box, n) {
  const [width, depth, height] = box;

  const widthCount = Math.floor(width / n);
  const depthCount = Math.floor(depth / n);
  const heightCount = Math.floor(height / n);

  const diceCount = widthCount * depthCount * heightCount;

  return diceCount;
}
