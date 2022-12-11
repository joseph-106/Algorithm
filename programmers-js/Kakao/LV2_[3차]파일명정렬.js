// 2018 KAKAO BLIND RECRUITMENT

function solution(files) {
  const isNumber = (ch) => !isNaN(parseInt(ch));

  const divideFile = (file) => {
    let [start, end] = [null, null];

    [...file].forEach((ch, i) => {
      if (start && end) return;

      if (start === null && isNumber(ch)) start = i;
      if (start !== null && end === null && !isNumber(ch)) end = i;
    });

    if (end === null) end = file.length;

    return [file.slice(0, start).toLowerCase(), Number(file.slice(start, end))];
  };

  return files.sort((a, b) => {
    const [head1, number1] = divideFile(a);
    const [head2, number2] = divideFile(b);

    return head1 === head2 ? number1 - number2 : head1 > head2 ? 1 : -1;
  });
}
