function solution(array, commands) {
  let result = [];
  let a,
    b,
    c = 0;

  for (let i = 0; i < commands.length; i++) {
    a = commands[i][0];
    b = commands[i][1];
    c = commands[i][2];

    let d = array.slice(a - 1, b).sort((a, b) => {
      return a - b;
    });
    result.push(d[c - 1]);
  }
  return result;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
