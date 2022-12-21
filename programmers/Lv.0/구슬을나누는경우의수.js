// 입출력 예
// balls share result
// 3       2       3
// 5       3       10

// 팩토리얼을 사용하지 않고 풀었던 경우 테스트케이스 중 해결안되는 케이스가 있음.
// function solution(balls, share) {
//   let n = 1;
//   let nMinusM = 1;
//   let m = 1;
//   let result = 1;
//   for (let i = 1; i <= balls; i++) {
//     n = n * i;
//   }
//   if (balls > share) {
//     for (let t = 1; t <= balls - share; t++) {
//       nMinusM = nMinusM * t;
//     }
//   } else if (balls === share) nMinusM = 1;
//   for (let j = 1; j <= share; j++) {
//     m = m * j;
//   }
//   result = n / (nMinusM * m);
//   return result;
// }

// console.log(solution(5, 5));

function solution(balls, share) {
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

function factorial(num) {
  let returnFactorial = BigInt(1);
  for (let i = num; i >= 2; i--) {
    returnFactorial *= BigInt(i);
  }
  return returnFactorial;
}
console.log(solution(5, 3));
