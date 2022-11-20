function solution(quiz) {
  return quiz.map((q) => {
    q = q.split(" ");
    const symbol = q[1];
    const [num1, num2, num3] = [q[0], q[2], q[4]].map(Number);
    const answer = symbol === "+" ? num1 + num2 : num1 - num2;

    return num3 === answer ? "O" : "X";
  });
}
