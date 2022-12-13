function solution(word) {
  const dic = [];
  const vowels = ["A", "E", "I", "O", "U"];

  const recursive = (temp) => {
    if (temp.length <= 5) {
      dic.push(temp);
      vowels.forEach((vowel) => {
        recursive(temp + vowel);
      });
    }
  };

  recursive("");

  return dic.indexOf(word);
}
