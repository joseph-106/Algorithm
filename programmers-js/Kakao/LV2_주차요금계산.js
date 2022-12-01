// 2022 KAKAO BLIND RECRUITMENT

function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const maxTime = 1439;
  const hash = new Map();

  const calcFee = ([total, time, sign]) => {
    if (sign === "IN") total = total + maxTime - time;
    if (total <= defaultTime) return defaultFee;

    return defaultFee + Math.ceil((total - defaultTime) / unitTime) * unitFee;
  };

  records
    .map((record) => {
      record = record.split(" ");
      record[0] =
        Number(record[0].split(":")[0]) * 60 + Number(record[0].split(":")[1]);

      return record;
    })
    .sort((a, b) => a[0] - b[0])
    .forEach((record) => {
      const [time, number, sign] = record;

      hash.set(
        number,
        !hash.has(number)
          ? [0, time, sign]
          : sign === "IN"
          ? [hash.get(number)[0], time, sign]
          : [hash.get(number)[0] + time - hash.get(number)[1], 0, sign]
      );
    });

  return [...hash.entries()]
    .sort((a, b) => a[0] - b[0])
    .map((record) => calcFee(record[1]));
}
