function solution(my_str, n) {
  return Array.from({ length: Math.ceil(my_str.length / n) }, (_, i) =>
    my_str.slice(n * i, n * i + n)
  );
}
