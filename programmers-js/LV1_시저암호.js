// 연습문제

function solution(s, n) {
  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      let num = arr[i].charCodeAt();
      // 아스키코드: 대문자 65 ~ 90, 소문자 97 ~ 122
      if (num <= 90) {
        arr[i] =
          num + n > 90
            ? String.fromCharCode(64 + ((num + n) % 90))
            : String.fromCharCode(num + n);
      } else {
        arr[i] =
          num + n > 122
            ? String.fromCharCode(96 + ((num + n) % 122))
            : String.fromCharCode(num + n);
      }
    }
  }
  return arr.join("");
}
