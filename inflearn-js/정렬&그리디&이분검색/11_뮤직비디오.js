function solution(m, songs) {
  let max;
  let start = Math.max(...songs);
  let end = songs.reduce((acc, cur) => acc + cur, 0);
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    let count = 1;
    songs.forEach((e) => {
      if (sum + e > mid) {
        count++;
        sum = 0;
      }
      sum += e;
    });
    if (count <= m) {
      max = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return max;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));

/* function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}
function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
} */
