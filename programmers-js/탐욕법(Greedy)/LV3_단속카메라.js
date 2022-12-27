function solution(routes) {
  routes.sort((a, b) => a[0] - b[0]);

  let last = routes[0][1];
  let count = 1;

  routes.forEach((route) => {
    const [start, end] = route;

    if (start > last) {
      last = end;
      count += 1;
    } else if (end < last) last = end;
  });

  return count;
}
