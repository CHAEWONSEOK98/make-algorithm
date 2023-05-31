function solution(sizes) {
  const width = [];
  const height = [];

  for (let i = 0; i < sizes.length; i++) {
    const max = Math.max(sizes[i][0], sizes[i][1]);
    const min = Math.min(sizes[i][0], sizes[i][1]);
    width.push(max);
    height.push(min);
  }

  let result = Math.max(...width) * Math.max(...height);

  return result;
}

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
