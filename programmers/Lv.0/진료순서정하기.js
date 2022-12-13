[3, 76, 24] > [3, 1, 2];

// e.length

// 3 > 1 1 1

// [3, 76, 24] > [3, 24, 76];
//                1  1   1 인덱스만큼 더하기?

// [30, 10, 23, 6, 100] > [6, 10, 23, 30 , 100]
//                         1  1   1   1    1

// function solution(emergency) {
//   let arr = emergency.sort(function (a, b) {
//     return a - b;
//   }); // 3 24 76
//   let standard = []; // 0 0 0
//   let result = [];
//   for (let i = 0; i < emergency.length; i++) {
//     standard.push(0);
//   }
//   for(let i = standard.length-1; i<=0; i--){
//     result.push(standard[(standard.length-1)-i] + i);
//   }
//   console.log(result);
// }

// console.log(solution([3, 76, 24]));


// 숫자가 클수록 가장 먼저 진료를 받아야함.
// 배열 안의 인덱스 값들끼리 더 작고, 크고를 비교해야함.

// [3, 76, 23] > [76, 23, 3]
//  0  1   2       0  1   2


해당문제에서 기존의 배열 값을 새로운 순서 값으로 치환하는 방법을 알아야함.
map() 의 사용법은 알고 있었지만 떠올리지 못했음.
정확히 알고 있지 못했던 것으로 생각하고 다시 한번 map에 대해 공부하는 시간을 가짐.

*
const numbers = [1,2,3,4,5];
const numbersMap = numbers.map(number => number * number);
console.log(numbersMap) // [1, 4, 9, 16, 25];
*

 function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a); // [76, 24, 3]
  let result = emergency.map(v => sorted.indexOf(v) + 1); // [3, 1, 2]
  return result;
}

console.log(solution([3, 76, 24]));
