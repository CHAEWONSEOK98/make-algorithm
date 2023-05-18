function solution(arr) {
  let cnt = 0;
  while (arr.length !== 2 ** cnt) {
    if (arr.length === 2 ** cnt) break;
    if (arr.length > 2 ** cnt) {
      cnt += 1;
    } else {
      let q = 2 ** cnt - arr.length;
      for (let i = 0; i < q; i++) {
        arr.push(0);
      }
    }
  }
  return arr;
}

console.log(solution([1, 2, 3, 4, 5, 6]));
