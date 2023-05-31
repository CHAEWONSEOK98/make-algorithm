function solution(k, score) {
  let compare = [];
  let result = [];

  for (let i = 0; i < score.length; i++) {
    if (i >= k) {
      if (score[i] < compare[0]) {
        result.push(compare[0]);
        continue;
      }
    }
    if (compare.length === k) {
      compare.shift();
    }
    compare.push(score[i]);
    compare.sort((a, b) => {
      return a - b;
    });
    result.push(compare[0]);
  }
  return result;
}

console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
