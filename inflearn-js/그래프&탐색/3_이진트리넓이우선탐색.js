// BFS
function solution() {
  let result = "";
  const queue = [];
  queue.push(1);
  while (queue.length) {
    let val = queue.shift();
    result += val + " ";
    for (x of [2 * val, 2 * val + 1]) if (x <= 7) queue.push(x);
  }
  return result;
}

console.log(solution());
