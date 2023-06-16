function solution(m, arr) {
  let result = [];
  let n = arr.length;
  let checkList = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      result.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (checkList[i] === 0) {
          checkList[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          checkList[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return result;
}

console.log(solution(2, [3, 6, 9, 10]));
