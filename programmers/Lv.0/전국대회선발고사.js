function solution(rank, attendance) {
  let result = [];
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === true) {
      result.push(rank[i]);
    }
  }
  result.sort((a, b) => {
    return a - b;
  });

  // 2 4 5 7

  let a = rank.indexOf(result[0]);
  let b = rank.indexOf(result[1]);
  let c = rank.indexOf(result[2]);

  return 10000 * a + 100 * b + c;
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
