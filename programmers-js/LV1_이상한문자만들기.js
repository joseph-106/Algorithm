// 연습문제

function solution(s) {
  const arr = s.split(" ");
  const word = [];
  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split("");
    for (let j = 0; j < arr2.length; j++) {
      // 짝수는 대문자, 홀수는 소문자로
      arr2[j] = j % 2 === 0 ? arr2[j].toUpperCase() : arr2[j].toLowerCase();
    }
    word.push(arr2.join(""));
  }
  // 문자 배열은 join으로 합치자
  return word.join(" ");
}
