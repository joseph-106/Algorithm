function solution(begin, target, words) {
  let min = Number.MAX_SAFE_INTEGER;

  const canChange = (word1, word2) => {
    let match = 0;

    for (let i = 0; i < begin.length; i++) {
      if (word1[i] === word2[i]) match += 1;
    }

    return match === begin.length - 1;
  };

  const recursive = (temp, words, count) => {
    if (temp === target) return (min = Math.min(min, count));

    words.forEach((word) => {
      if (canChange(temp, word))
        recursive(
          word,
          words.filter((e) => e !== word),
          count + 1
        );
    });
  };

  recursive(begin, [...words], 0);

  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}
