function solution(num_list, n) {
  return Array.from({ length: num_list.length / n }, (_, i) =>
    num_list.slice(n * i, n * i + n)
  );
}
