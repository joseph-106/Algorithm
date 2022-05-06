function solution(s) {
  let result = 0;
  const tempArr = [];
  let flag = true;
  s.split("").forEach((e) => {
    if ((e === "+") | (e === "-") | (e === "*") | (e === "/")) {
      if (flag) {
        let temp = tempArr.pop();
        result = eval(`${tempArr.pop()} ${e} ${temp}`);
        flag = false;
      } else {
        result = eval(`${result} ${e} ${tempArr.pop()}`);
      }
    } else {
      tempArr.push(e);
    }
  });
  return result;
}

let str = "352+*9-";
console.log(solution(str));

/* function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
} */
