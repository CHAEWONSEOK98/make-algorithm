// 경로탐색 - DFS - 인접행렬 : 노드개수가 적을 때

function solution(n, arr) {
  let result = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let check = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) result++;
    else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && check[i] === 0) {
          check[i] = 1;
          DFS(i);
          check[i] = 0;
        }
      }
    }
  }
  check[1] = 1;
  DFS(1);
  return result;
}

console.log(
  solution(5, [
    [5, 9],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
