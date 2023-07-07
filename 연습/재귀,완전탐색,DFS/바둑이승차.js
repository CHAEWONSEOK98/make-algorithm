// 이진트리 DFS

function solution(c, arr) {
  let result = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      result = Math.max(result, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return result;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
