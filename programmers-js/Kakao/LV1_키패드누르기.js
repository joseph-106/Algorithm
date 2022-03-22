// 2020 카카오 인턴십

function solution(numbers, hand) {
  let result = "";
  let left = 10; // * 치환
  let right = 12; // # 치환
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      numbers[i] = 11; // 0 치환
    }
    if (numbers[i] % 3 === 1) {
      result += "L";
      left = numbers[i];
    } else if (numbers[i] % 3 === 0) {
      result += "R";
      right = numbers[i];
    } else {
      // 거리 구하기
      let leftDistance =
        left % 3 === 2
          ? Math.abs((numbers[i] - left) / 3)
          : Math.abs((numbers[i] - (left + 1)) / 3) + 1;
      let rightDistance =
        right % 3 === 2
          ? Math.abs((numbers[i] - right) / 3)
          : Math.abs((numbers[i] - (right - 1)) / 3) + 1;
      // 거리 비교
      if (leftDistance === rightDistance) {
        if (hand === "left") {
          result += "L";
          left = numbers[i];
        } else {
          result += "R";
          right = numbers[i];
        }
      } else if (leftDistance < rightDistance) {
        result += "L";
        left = numbers[i];
      } else {
        result += "R";
        right = numbers[i];
      }
    }
  }
  return result;
}
