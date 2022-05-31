function solution(m, arr) {
  const resultArr = [];
  const recursive = (num, tempArr) => {
    if (num <= m) {
      for (let i = 0; i < arr.length; i++)
        if (!tempArr.includes(arr[i])) recursive(num + 1, [...tempArr, arr[i]]);
    } else resultArr.push(tempArr);
  };
  recursive(1, []);
  return resultArr;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));

/* function solution(m, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
} */

/* function solution(m, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = [];
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp.push(arr[i]);
          DFS(L + 1);
          ch[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
} */
