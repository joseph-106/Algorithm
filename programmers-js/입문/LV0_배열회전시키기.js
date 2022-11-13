function solution(numbers, direction) {
  const copy = [...numbers];

  if (direction === "right") {
    copy.unshift(copy.pop());
  }

  if (direction === "left") {
    copy.push(copy.shift());
  }

  return copy;
}
