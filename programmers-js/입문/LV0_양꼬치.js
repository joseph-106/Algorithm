function solution(n, k) {
  let totalPrice = 0;
  const serviceDrinkCount = Math.floor(n / 10);

  totalPrice += 12000 * n;

  if (serviceDrinkCount < k) {
    const overDrinkCount = k - serviceDrinkCount;

    totalPrice += 2000 * overDrinkCount;
  }

  return totalPrice;
}
