// 재귀
function solution(n, m) {
  let result = [];
  let tmp = Array.from({ length: m }, () => 0); // [0, 0]

  function DFS(L) {
    if (L === m) {
      result.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return result;
}
console.log(solution(3, 2));

//다중 반복문으로 순열을 구현하는 경우 m이 바뀔 때마다 반복코드를 새로 작성해야한다.

// 3개 중에 2개 뽑는 경우
function solution(n, m) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i, j);
    }
  }
}
console.log(solution(3, 2));

// 4개 중에 3개 뽑는 경우
function solution(n, m) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        console.log(i, j, k);
      }
    }
  }
}
console.log(solution(4, 3));
