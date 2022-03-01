// 월간 코드 챌린지 시즌1

function solution(numbers) {
  const arr = [];
  // 이중 반복문으로 모든 조합 배열에 추가
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  // 배열 중복 제거, 오름차순 정렬
  return [...new Set(arr)].sort((a, b) => a - b);
}
