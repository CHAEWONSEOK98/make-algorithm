// 합이 같은 부분집합 - 이진트리 DFS

function solution(arr) {
  let result = 'NO';
  let flag = 0;
  let total = arr.reduce((acc, cur) => acc + cur, 0);
  let n = arr.length;

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        result = 'YES';
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return result;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
