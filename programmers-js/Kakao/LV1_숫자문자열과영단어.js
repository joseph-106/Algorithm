// 2021 카카오 채용연계형 인턴십

function solution(s) {
  s = s.split("");
  let numString = "";
  for (let i = 0; i < s.length; i++) {
    // 문자열이 숫자인지
    if (isNaN(s[i]) === false) {
      numString += s[i];
    } else {
      if (s[i] === "z") {
        numString += "0";
        s[i + 1] = "*";
        s[i + 2] = "*";
        s[i + 3] = "*";
      } else if (s[i] === "o") {
        numString += "1";
        s[i + 1] = "*";
        s[i + 2] = "*";
      } else if (s[i] === "t") {
        if (s[i + 1] === "w") {
          numString += "2";
          s[i + 1] = "*";
          s[i + 2] = "*";
        } else {
          numString += "3";
          s[i + 1] = "*";
          s[i + 2] = "*";
          s[i + 3] = "*";
          s[i + 4] = "*";
        }
      } else if (s[i] === "f") {
        if (s[i + 1] === "o") {
          numString += "4";
          s[i + 1] = "*";
          s[i + 2] = "*";
          s[i + 3] = "*";
        } else {
          numString += "5";
          s[i + 1] = "*";
          s[i + 2] = "*";
          s[i + 3] = "*";
        }
      } else if (s[i] === "s") {
        if (s[i + 1] === "i") {
          numString += "6";
          s[i + 1] = "*";
          s[i + 2] = "*";
        } else {
          numString += "7";
          s[i + 1] = "*";
          s[i + 2] = "*";
          s[i + 3] = "*";
          s[i + 4] = "*";
        }
      } else if (s[i] === "e") {
        numString += "8";
        s[i + 1] = "*";
        s[i + 2] = "*";
        s[i + 3] = "*";
        s[i + 4] = "*";
      } else if (s[i] === "n") {
        numString += "9";
        s[i + 1] = "*";
        s[i + 2] = "*";
        s[i + 3] = "*";
      }
    }
  }
  return Number(numString);
}
