function solution(n) {
  let min = Number.MAX_SAFE_INTEGER;
  const recursive = (day, left) => {
    if (left === 0) min = day;
    if (day < min && left > 0) {
      if (left % 3 === 0) recursive(day + 1, left / 3);
      if (left % 2 === 0) recursive(day + 1, left / 2);
      recursive(day + 1, left - 1);
    }
  };
  recursive(0, n);
  return min;
}

console.log(solution(25)); //6
console.log(solution(101)); //9
console.log(solution(10000)); //15
console.log(solution(1000001)); //21
console.log(solution(213456)); //17
console.log(solution(456789)); //21
console.log(solution(1900000000)); //30
console.log(solution(2147485)); //22
console.log(solution(17)); //6
console.log(solution(97)); //8

/* function solution(n) {
  let nH = new Map();
  let queue = [];
  let L = 0;
  queue.push(n);
  nH.set(n, 1);
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      if (x === 0) return L;
      if (!nH.has(x - 1)) {
        nH.set(x - 1, 1);
        queue.push(x - 1);
      }
      if (x % 2 === 0 && !nH.has(x / 2)) {
        nH.set(x / 2, 1);
        queue.push(x / 2);
      }
      if (x % 3 === 0 && !nH.has(x / 3)) {
        nH.set(x / 3, 1);
        queue.push(x / 3);
      }
    }
    L++;
  }
} */
