// 연습문제

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  // repeat()로 반복, 이스케이프 시퀀스로 줄바꿈
  console.log(("*".repeat(a) + "\n").repeat(b));
});
