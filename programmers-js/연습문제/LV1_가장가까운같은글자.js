function solution(s) {
  const temp = [];

  return [...s].map((ch, i) => {
    const last = temp.lastIndexOf(ch);

    temp.push(ch);
    return last === -1 ? -1 : i - last;
  });
}
