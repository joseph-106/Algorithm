function solution(A, B) {
  A = [...A];

  for (let i = 0; i <= A.length; i++) {
    if (A.join("") === B) return i;

    A.unshift(A.pop());
  }

  return -1;
}
