function solution(babbling) {
  const babbles = ["aya", "ye", "woo", "ma"];

  return babbling.reduce((count, b) => {
    let [temp, last] = ["", ""];

    [...b].forEach((ch) => {
      temp += ch;

      if (temp !== last && babbles.includes(temp)) {
        last = temp;
        temp = "";
      }
    });

    return temp === "" ? count + 1 : count;
  }, 0);
}
