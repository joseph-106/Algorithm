function solution(s) {
  const tempArr = [];
  let result = "";
  for (let x of s) {
    if (x === "(") {
      tempArr.push(x);
    } else if (x === ")") {
      tempArr.pop();
    } else if (tempArr.length === 0) {
      result += x;
    }
  }
  return result;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

/* function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
} */
