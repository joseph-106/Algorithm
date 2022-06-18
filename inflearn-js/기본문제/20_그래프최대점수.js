function solution(nums, edges, k) {
  let max = Number.MIN_SAFE_INTEGER;
  const recursive = (location, time, point, tempArr) => {
    if (location === 0 && point > max) max = point;
    for (let i = 0; i < edges.length; i++) {
      if (location === edges[i][0] && time + edges[i][2] <= k) {
        tempArr.includes(edges[i][1])
          ? recursive(edges[i][1], time + edges[i][2], point, [...tempArr])
          : recursive(
              edges[i][1],
              time + edges[i][2],
              point + nums[edges[i][1]],
              [...tempArr, edges[i][1]]
            );
      } else if (location === edges[i][1] && time + edges[i][2] <= k) {
        tempArr.includes(edges[i][1])
          ? recursive(edges[i][0], time + edges[i][2], point, [...tempArr])
          : recursive(
              edges[i][0],
              time + edges[i][2],
              point + nums[edges[i][0]],
              [...tempArr, edges[i][1]]
            );
      }
    }
  };
  recursive(0, 0, nums[0], [0]);
  return max;
}

console.log(
  solution(
    [5, 25, 10, 30],
    [
      [0, 1, 11],
      [1, 2, 15],
      [0, 3, 12],
    ],
    47
  )
); //60
console.log(
  solution(
    [7, 20, 5, 30],
    [
      [0, 1, 11],
      [1, 2, 12],
      [2, 3, 15],
      [1, 3, 17],
    ],
    53
  )
); //32

/* function solution(nums, edges, k) {
  let answer = 0;
  let n = nums.length;
  let graph = Array.from(Array(n), () => Array());
  let ch = new Array(n).fill(0);
  for (let [a, b, c] of edges) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }
  function DFS(cur, time, sum) {
    if (time < 0) return;
    ch[cur]++;
    if (ch[cur] === 1) sum += nums[cur];
    if (cur === 0) answer = Math.max(answer, sum);
    for (let [nv, cost] of graph[cur]) {
      DFS(nv, time - cost, sum);
    }
    ch[cur]--;
  }
  DFS(0, k, 0);
  return answer;
} */
