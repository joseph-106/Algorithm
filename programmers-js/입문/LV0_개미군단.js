function solution(hp) {
  const generalAntCount = Math.floor(hp / 5);
  const soldierAntCount = Math.floor((hp - generalAntCount * 5) / 3);
  const workerAntCount = hp - generalAntCount * 5 - soldierAntCount * 3;

  return generalAntCount + soldierAntCount + workerAntCount;
}
