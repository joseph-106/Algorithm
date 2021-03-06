// 2019 KAKAO BLIND RECRUITMENT

function solution(N, stages) {
  const arr = [];
  for (let i = 1; i <= N; i++) {
    const tempObj = {};
    tempObj["stage"] = i;
    tempObj["fail"] =
      stages.filter((e) => e === i).length /
      stages.filter((e) => e >= i).length;
    // 배열에 임시 객체를 push
    arr.push(tempObj);
  }
  // 객체의 value를 기준으로 배열 정렬
  arr.sort((a, b) => b.fail - a.fail);
  const answer = [];
  arr.forEach((e) => answer.push(e.stage));
  return answer;
}

// 객체 안쓰고 풀기
// function solution(N, stages) {
//   let result = [];
//   for (let i = 1; i <= N; i++) {
//     result.push([
//       i,
//       stages.filter((e) => e === i).length /
//         stages.filter((e) => e >= i).length,
//     ]);
//   }
//   result.sort((a, b) => b[1] - a[1]);
//   return result.map((e) => e[0]);
// }
