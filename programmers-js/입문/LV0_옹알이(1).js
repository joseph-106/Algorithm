function solution(babbling) {
  const canBabble = (babble) =>
    babble
      .split("aya")
      .map((e) => e.split("ye"))
      .flat()
      .map((e) => e.split("woo"))
      .flat()
      .map((e) => e.split("ma"))
      .flat()
      .join("") === "";

  return babbling.filter((babble) => canBabble(babble)).length;
}
