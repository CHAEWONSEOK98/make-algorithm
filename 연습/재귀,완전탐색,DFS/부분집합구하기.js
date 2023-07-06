// 이진트리 DFS

function solution(n) {
  let result = [];
  let check = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) tmp += i + ' ';
      }
      if (tmp.length > 0) result.push(tmp.trim());
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return result;
}

console.log(solution(3));
