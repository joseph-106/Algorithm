// Summer/Winter Coding(~2018)

function solution(skill, skill_trees) {
  let possibleCount = 0;
  
  skill_trees.forEach(skill_tree => {
      const temp = [...skill_tree].filter(ch => [...skill].includes(ch)).join("");
      if (skill.indexOf(temp) === 0) possibleCount += 1;
  })
  
  return possibleCount;
}