function solution(need, plan) {
  const needArr = need.split("");
  const planArr = plan.split("");
  const num = needArr.length;
  let count = 0;
  for (let i = 0; i < num; i++) {
    const needTemp = needArr.shift();
    while (planArr.length !== 0) {
      const planTemp = planArr.shift();
      if (needTemp === planTemp) {
        count++;
        break;
      }
    }
  }
  return count === num ? "YES" : "NO";
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
