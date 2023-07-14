// 경로탐색 - DFS - 인접리스트 : 노드개수가 많을 때

function solution(n, arr) {
  let result = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  function DFS(v) {
    if (v === n) result++;
    else {
      for (let i = 0; i < graph[v].length; i++) {
        if (check[graph[v][i]] === 0) {
          check[graph[v][i]] = 1;
          DFS(graph[v][i]);
          check[graph[v][i]] = 0;
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
