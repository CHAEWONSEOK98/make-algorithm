// 문제
// n / result
// 24 > [1, 2, 3, 4, 6, 8, 12, 24]
// 29 > [1, 29]

function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }
  let result = arr.sort(function (a, b) {
    return a - b;
  });
  return result;
}

console.log(solution(24));
