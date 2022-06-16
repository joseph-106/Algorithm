function solution(s) {
  const tempArr = [];
  for (x of [...new Set(s)])
    tempArr.push([x, s.split("").filter((e) => e === x).length]);
  let result = "";
  tempArr
    .sort((a, b) => b[1] - a[1])
    .forEach((e) => (result += e[0].repeat(e[1])));
  return result;
}

console.log(solution("aaAAcccbbbBB")); //cccbbbaaAABB
console.log(solution("kdkDKKGkdkgks")); //kkkkkddKKDGgs
console.log(solution("ckdowiskjgwigAGD")); //kkwwiiggcdosjAGD
console.log(solution("dkjgkdkjglkdjg")); //kkkkdddjjjgggl
console.log(solution("dkjgskjgkDKJGSKGKSG")); //kkkKKKGGGjjggSSdsDJ

/* function solution(s) {
  let answer = "";
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  let tmp = [...sH].sort((a, b) => b[1] - a[1]);
  for (let [key, val] of tmp) {
    answer += key.repeat(val);
  }
  return answer;
} */
