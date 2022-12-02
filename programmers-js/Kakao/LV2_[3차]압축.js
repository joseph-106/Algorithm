// 2018 KAKAO BLIND RECRUITMENT

function solution(msg) {
  const words = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const res = [];
  const copy = [...msg].reverse();
  let temp = "";

  while (copy.length) {
    temp += copy.pop();

    if (words.includes(temp + copy[copy.length - 1])) continue;

    words.push(temp + copy[copy.length - 1]);
    res.push(words.indexOf(temp) + 1);
    temp = "";
  }

  return res;
}
