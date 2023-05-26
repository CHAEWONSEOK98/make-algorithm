function solution(arr, query) {
  let p = arr;
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      p = p.slice(0, query[i] + 1);
    } else {
      p = p.slice(query[i]);
    }
  }
  return p;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2]));
