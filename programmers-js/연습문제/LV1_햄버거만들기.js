function solution(ingredient) {
  const stack = [];
  let count = 0;

  ingredient = ingredient.reverse();

  while (ingredient.length) {
    const item = ingredient.pop();

    stack.push(item);
    if (stack.slice(-4).join("") === "1231") {
      for (let i = 0; i < 4; i++) stack.pop();
      count += 1;
    }
  }

  return count;
}
