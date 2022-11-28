function solution(chicken) {
  let service = 0;

  while (chicken >= 10) {
    const [temp, rest] = [Math.floor(chicken / 10), chicken % 10];

    service += temp;
    chicken = temp + rest;
  }

  return service;
}
