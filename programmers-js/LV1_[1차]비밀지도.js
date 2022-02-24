// 2018 KAKAO BLIND RECRUITMENT

function solution(n, arr1, arr2) {
  const answer = [];
  // 2진수로 변환
  arr1 = arr1.map((e) => e.toString(2));
  arr2 = arr2.map((e) => e.toString(2));
  for (let i = 0; i < n; i++) {
    // 부족한 자릿수만큼 0 채우기
    arr1[i] =
      arr1[i].length !== n ? "0".repeat(n - arr1[i].length) + arr1[i] : arr1[i];
    arr2[i] =
      arr2[i].length !== n ? "0".repeat(n - arr2[i].length) + arr2[i] : arr2[i];
    let temp = "";
    for (let j = 0; j < n; j++) {
      temp += arr1[i][j] == 0 && arr2[i][j] == 0 ? " " : "#";
    }
    answer.push(temp);
  }
  return answer;
}
