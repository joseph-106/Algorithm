// 전위 순회
function solution1(n) {
  let result = "";
  const preorder = (num) => {
    if (num <= 7) {
      result += num;
      preorder(num * 2);
      preorder(num * 2 + 1);
    }
  };
  preorder(n);
  return result;
}

// 중위 순회
function solution2(n) {
  let result = "";
  const inorder = (num) => {
    if (num <= 7) {
      inorder(num * 2);
      result += num;
      inorder(num * 2 + 1);
    }
  };
  inorder(n);
  return result;
}

// 후위 순회
function solution3(n) {
  let result = "";
  const postorder = (num) => {
    if (num <= 7) {
      postorder(num * 2);
      postorder(num * 2 + 1);
      result += num;
    }
  };
  postorder(n);
  return result;
}

console.log(solution1(1));
console.log(solution2(1));
console.log(solution3(1));

/* function solution1(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + " ";
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
} */
