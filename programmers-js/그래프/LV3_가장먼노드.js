function solution(n, edge) {
  const connects = Array.from({ length: n }, () => []);
  const [visited, queue] = [[1], [0]];

  edge.forEach((e) => {
    connects[e[0] - 1].push(e[1] - 1);
    connects[e[1] - 1].push(e[0] - 1);
  });

  while (queue.length) {
    const cur = queue.shift();

    for (const next of connects[cur]) {
      if (!visited[next]) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }

  return visited.filter((e) => e === Math.max(...visited)).length;
}
