function solution(score) {
  let avg = score.map((item) => (item[0] + item[1]) / 2);

  let sorted = avg.slice().sort((a, b) => {
    return b - a;
  });

  let result = avg.map((item) => sorted.indexOf(item) + 1);
  return result;
}

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
