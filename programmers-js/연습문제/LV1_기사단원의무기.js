function solution(number, limit, power) {
  let sum = 0;

  const getKnightPower = (knightNumber) => {
    let count = 0;

    for (let i = 1; i < Math.sqrt(knightNumber); i++) {
      if (knightNumber % i === 0) count += 2;
    }

    if (Math.sqrt(knightNumber) % 1 === 0) count += 1;

    return count;
  };

  for (let knightNumber = 1; knightNumber <= number; knightNumber++) {
    const knightPower = getKnightPower(knightNumber);

    sum += knightPower > limit ? power : knightPower;
  }

  return sum;
}
