// 2018 KAKAO BLIND RECRUITMENT

function solution(str1, str2) {
  const re = /[a-zA-Z]/;
  const [arr1, arr2] = [[], []];
  for (let i = 0; i < str1.length - 1; i++)
    if (re.test(str1[i]) && re.test(str1[i + 1]))
      arr1.push(`${str1[i] + str1[i + 1]}`.toUpperCase());
  for (let i = 0; i < str2.length - 1; i++)
    if (re.test(str2[i]) && re.test(str2[i + 1]))
      arr2.push(`${str2[i] + str2[i + 1]}`.toUpperCase());
  if (!arr1.length && !arr2.length) return 65536;

  let count = 0;
  const set = [...new Set([...arr1, ...arr2])];
  set.forEach((item) => {
    if (arr1.includes(item) && arr2.includes(item))
      count += Math.min(
        arr1.filter((e) => e === item).length,
        arr2.filter((e) => e === item).length
      );
  });
  return Math.floor((count / (arr1.length + arr2.length - count)) * 65536);
}
