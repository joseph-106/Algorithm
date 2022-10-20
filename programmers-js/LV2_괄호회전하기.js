// 월간 코드 챌린지 시즌2

function solution(s) {
  let count = 0;
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let flag = true;
    for (const ch of s) {
      if (ch === "(" || ch === "[" || ch === "{") stack.push(ch);
      else {
        const temp = stack.pop();
        if (
          (ch === ")" && temp !== "(") ||
          (ch === "]" && temp !== "[") ||
          (ch === "}" && temp !== "{")
        ) {
          flag = false;
          break;
        }
      }
    }
    if (flag && stack.length === 0) count++;
    s.push(s.shift());
  }
  return count;
}
