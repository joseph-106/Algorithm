function solution(my_string) {
  const splitted = my_string.split(" ");
  let res = Number(splitted[0]);

  for (let i = 1; i < splitted.length; i += 2) {
    const symbol = splitted[i];
    const number = Number(splitted[i + 1]);

    if (symbol === "+") res += number;
    if (symbol === "-") res -= number;
  }

  return res;
}
