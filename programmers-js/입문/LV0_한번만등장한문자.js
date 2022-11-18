function solution(s) {
  const res = [];

  for (const ch of s) {
    if (s.indexOf(ch) === s.lastIndexOf(ch)) {
      res.push(ch);
      s = s.replaceAll(ch, "");
    }
  }

  return res.sort().join("");
}
