function solution(n, works) {
  works.sort((a, b) => a - b);
  while (n > 0 && works[works.length - 1] > 0) {
    const temp = works.pop() - 1;
    const last = works[works.length - 1];
    temp > last ? works.push(temp) : works.splice(works.indexOf(last), 0, temp);
    n--;
  }
  return works.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}
