// 이분 검색 알고리즘
function solution(target, arr) {
  arr.sort((a, b) => a - b);
  const search = (start, end) => {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid + 1;
    return arr[mid] > target ? search(start, mid - 1) : search(mid + 1, end);
  };
  return search(0, arr.length - 1);
}

/* function solution(target, arr) {
  return arr.sort((a, b) => a - b).indexOf(target) + 1;
} */

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

/* function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
} */
