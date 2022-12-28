// 월간 코드 챌린지 시즌2

function solution(numbers) {
  const f = (x) => {
    const binary = ["0", ...x.toString(2)];

    if (x % 2 === 0) binary[binary.length - 1] = "1";
    else binary.splice(binary.lastIndexOf("0"), 2, "1", "0");

    return parseInt(binary.join(""), 2);
  };

  return numbers.map((x) => f(x));
}
