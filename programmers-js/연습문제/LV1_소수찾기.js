// 연습문제

// 1트) 효율성 테스트 실패
// 2 이상의 자연수가 소수인지 판별하는 함수
function prime(x) {
  // 2부터 x-1 중에 나누어 떨어진다면 false
  for (let i = 2; i < x; i++) {
    if ((x / i) % 1 === 0) {
      return false;
    }
  }
  return true;
}

// prime 함수로 범위 내의 소수의 개수 구하기
function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (prime(i)) {
      answer++;
    }
  }
  return answer;
}

// 2트) 에라토스테네스의 체
function solution(n) {
  // Array로 특정 길이 배열을 생성하고, fill(value, start, end)로 값 채우기
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      // 소수(i)의 모든 배수 false
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  // filter로 배열에서 특정 값 개수 구하기
  return arr.filter((e) => e === true).length;
}
