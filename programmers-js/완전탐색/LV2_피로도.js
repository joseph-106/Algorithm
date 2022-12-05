function solution(k, dungeons) {
  let max = 0;

  const recursive = (fatigue, count, dungeons) => {
    max = Math.max(count, max);

    dungeons.forEach((dungeon, i) => {
      const [require, consume] = dungeon;

      if (fatigue >= require) {
        const temp = [...dungeons];

        temp.splice(i, 1);
        recursive(fatigue - consume, count + 1, temp);
      }
    });
  };

  recursive(k, 0, [...dungeons]);

  return max;
}
