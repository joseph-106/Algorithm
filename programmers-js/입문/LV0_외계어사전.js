function solution(spell, dic) {
  return dic.filter((word) => spell.every((ch) => word.includes(ch))).length
    ? 1
    : 2;
}
