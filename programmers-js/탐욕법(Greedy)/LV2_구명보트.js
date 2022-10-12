function solution(people, limit) {
  let [count, temp, left, right] = [0, 0, 0, people.length - 1];
  people.sort((a, b) => a - b);
  while (left <= right) {
    if (temp + people[right] <= limit) {
      temp += people[right];
      right--;
    } else if (temp + people[left] <= limit) {
      temp += people[left];
      left++;
    } else {
      temp = 0;
      count++;
    }
  }
  return count + 1;
}
