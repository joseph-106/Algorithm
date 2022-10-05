function solution(s) {
  let open = 0;
  for (const ch of s) {
    if (ch === ")") {
      if (open <= 0) return false;
      open--;
    } else open++;
  }
  return open === 0 ? true : false;
}
