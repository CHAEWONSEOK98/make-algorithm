10 > 5;
15 > 8;

function solution(n) {
  let cnt = [];
  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt.push(j);
      }
    }
    if (cnt.length >= 3) result += 1;
    cnt = [];
  }
  return result;
}

console.log(solution(15));
