// 규칙성 찾기 시도 1
// yellow 1 > brown 8 >> 1 x 2 + 2 + 4
// yellow 2 > brown 10 >> 2 x 2 + 2 + 4
// yellow 3 > brown 12 >> 3 x 2 + 2 + 4
// yellow 4 > brown 14 >> 4 x 2 + 2 + 4
// yellow 5 > brown 16 >> 5 x 2 + 2 + 4

// 규칙성 찾기 시도 2
// 10 + 2 = 12 [4, 3]
// 8 + 1 = 9 [3, 3]
// 24 + 24 = 48 [8,6]

function solution(brown, yellow) {
  let sum = brown + yellow;

  for (let i = 3; i <= sum; i++) {
    let x = sum / i;
    let y = i;

    if ((x - 2) * (y - 2) === yellow) return [x, y];
    else continue;
  }
}

console.log(solution(26, 30));
