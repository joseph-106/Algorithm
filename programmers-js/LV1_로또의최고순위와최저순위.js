// 2021 Dev-Matching: 웹 백엔드 개발자(상반기)

function solution(lottos, win_nums) {
  // 구매한 로또 배열에서 0인 값 제거
  const newLottos = lottos.filter((num) => num !== 0);

  // 일치하는 최소 개수를 담는 변수
  var minimum = 0;

  // 이중 반복문으로 일치하는 최소 개수 구하기
  for (var i = 0; i < newLottos.length; i++) {
    for (var j = 0; j < win_nums.length; j++) {
      if (newLottos[i] == win_nums[j]) {
        minimum++;
      }
    }
  }

  // 일치하는 최대 개수 (최소 개수 + 0의 개수)
  var maximum = minimum + 6 - newLottos.length;

  // 0개 일치하는 경우 예외처리
  if (minimum == 0) {
    minimum = 1;
  }
  if (maximum == 0) {
    maximum = 1;
  }

  // 최고 순위와 최저 순위
  var answer = [7 - maximum, 7 - minimum];
  return answer;
}
