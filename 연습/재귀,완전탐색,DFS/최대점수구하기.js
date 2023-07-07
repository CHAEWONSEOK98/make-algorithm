// 이진트리 - DFS

function solution(m, ps, pt) {
  let result = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === n) {
      result = Math.max(result, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, 0, 0);
  return result;
}

console.log(solution(20, [10, 25, 15, 6, 7], [5, 12, 8, 3, 4]));
