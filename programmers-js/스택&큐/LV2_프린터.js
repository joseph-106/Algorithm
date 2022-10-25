function solution(priorities, location) {
  let count = 0;
  while (true) {
    const current = priorities.shift();
    if (!priorities.filter((num) => num > current).length) {
      count++;
      if (location === 0) return count;
    } else priorities.push(current);
    location > 0 ? location-- : (location = priorities.length - 1);
  }
}
