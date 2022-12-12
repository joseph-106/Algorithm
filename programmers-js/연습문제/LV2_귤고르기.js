function solution(k, tangerine) {
  const hash = new Map();
  let [sum, count] = [0, 0];

  tangerine.forEach((t) => hash.set(t, hash.has(t) ? hash.get(t) + 1 : 1));

  const sorted = [...hash.values()].sort((a, b) => a - b);

  while (sum < k) {
    sum += sorted.pop();
    count += 1;
  }

  return count;
}
