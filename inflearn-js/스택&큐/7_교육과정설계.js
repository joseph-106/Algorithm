function solution(need, plan) {
  let temp = "";
  plan.split("").forEach((e) => {
    if (need.includes(e)) temp += e;
  });
  return temp === need ? "YES" : "NO";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));

/* function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
} */
