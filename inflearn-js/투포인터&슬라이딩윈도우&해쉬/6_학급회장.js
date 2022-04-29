function solution(s) {
  const resultObj = {};
  for (let x of s) {
    if (resultObj.hasOwnProperty(x)) resultObj[x] += 1;
    else resultObj[x] = 1;
  }
  let max = 0;
  let president = "";
  for (let key in resultObj) {
    if (resultObj[key] > max) {
      max = resultObj[key];
      president = key;
    }
  }
  return president;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

/* function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
} */
