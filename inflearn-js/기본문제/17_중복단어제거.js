function solution(s) {
  const resultArr = [];
  for (let x of s) {
    if (!resultArr.includes(x)) resultArr.push(x);
  }
  return resultArr;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

/* function solution(s) {
  let answer;
  answer = s.filter(function (e, i) {
    return s.indexOf(e) === i;
  });
  return answer;
} */
