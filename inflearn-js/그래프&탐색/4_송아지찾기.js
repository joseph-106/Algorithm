function solution(s, e) {
  let min = Number.MAX_SAFE_INTEGER;
  const total = e - s;
  if (total < 0) return -total;
  const recursive = (count, distance) => {
    if (count <= Math.floor(total / 5) + 3) {
      if ((distance === 0) & (count < min)) min = count;
      if (distance > 3) recursive(count + 1, distance - 5);
      else if (distance < 0) recursive(count + 1, distance + 1);
      else recursive(count + 1, distance - 1);
    }
  };
  recursive(0, total);
  return min;
}

console.log(solution(5, 14));

/* function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
} */

/* function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
} */
