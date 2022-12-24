function solution(s) {
  const hash = new Map();
  let [x, count] = ["", 0];

  const init = (hash) => {
    hash.set("x", 0);
    hash.set("notX", 0);
    x = "";
  };

  init(hash);

  [...s].forEach((ch) => {
    if (x === "") x = ch;

    ch === x
      ? hash.set("x", hash.get("x") + 1)
      : hash.set("notX", hash.get("notX") + 1);

    if (hash.get("x") === hash.get("notX")) {
      init(hash);
      count += 1;
    }
  });

  const hasValue = [...hash.values()].some((value) => value !== 0);

  return hasValue ? count + 1 : count;
}
