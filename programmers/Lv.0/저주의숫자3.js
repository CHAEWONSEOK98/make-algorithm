function solution(n) {
  let result = 0;
  let number = n;
  for (let i = 1; i <= number; i++) {
    result = result + 1;
    if (i % 3 === 0 || String(i).includes('3')) {
      number += 1;
    }
  }
  console.log(result);
}

console.log(solution(10));
