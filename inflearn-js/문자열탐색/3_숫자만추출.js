function solution(str) {
  return Number(str.replace(/[a-z]/gi, ""));
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

/* function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
} */
