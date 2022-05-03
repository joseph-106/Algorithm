function solution(s) {
  const tempArr = [];
  for (let x of s) {
    if (x === "(") tempArr.push(x);
    else {
      if (tempArr.length !== 0) {
        tempArr.pop();
      } else {
        return "NO";
      }
    }
  }
  return tempArr.length === 0 ? "YES" : "NO";
}

let a = "(()(()))(()";
console.log(solution(a));

/* function solution(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
} */
