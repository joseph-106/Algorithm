// 연습문제

function solution(arr1, arr2) {
  let answer = [];

  // 2차원 배열을 다룰 때, 임시 배열의 위치에 주의하자!
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[0].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}
