// 2021 KAKAO BLIND RECRUITMENT

function solution(new_id) {
  // 1단계
  new_id = new_id.toLowerCase();
  // 2단계
  const unavailable = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    ":",
    "?",
    ",",
    "<",
    ">",
    "/",
  ];
  new_id = new_id.split("").filter((e) => !unavailable.includes(e));
  // 3단계
  for (let i = 0; i < new_id.length; i++) {
    if ((new_id[i] === ".") & (new_id[i + 1] === ".")) {
      new_id[i] = "*";
    }
  }
  new_id = new_id.filter((e) => e !== "*");
  // 4단계
  if (new_id[0] === ".") {
    new_id.shift();
  }
  if (new_id[new_id.length - 1] === ".") {
    new_id.pop();
  }
  // 5단계
  if (new_id.length === 0) {
    new_id = ["a"];
  }
  // 6단계
  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15);
  }
  if (new_id[new_id.length - 1] === ".") {
    new_id.pop();
  }
  // 7단계
  if (new_id.length === 1) {
    new_id = [new_id[0], new_id[0], new_id[0]];
  } else if (new_id.length === 2) {
    new_id = [new_id[0], new_id[1], new_id[1]];
  }
  return new_id.join("");
}
