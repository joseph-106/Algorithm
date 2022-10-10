// 2017 팁스타운

function solution(s) {
  if (!s.length % 2) return 0;
  const stack = [];
  for (let i = 0; i < s.length; i++)
    s[i] === stack[stack.length - 1] ? stack.pop() : stack.push(s[i]);
  return stack.length ? 0 : 1;
}
