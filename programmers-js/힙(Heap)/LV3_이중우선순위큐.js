function solution(operations) {
  const queue = [];
  operations.forEach((operation) => {
    if (operation.split(" ")[0] === "I")
      queue.push(Number(operation.split(" ")[1]));
    else if (operation === "D 1") queue.sort((a, b) => a - b).pop();
    else if (operation === "D -1") queue.sort((a, b) => b - a).pop();
  });
  return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}
