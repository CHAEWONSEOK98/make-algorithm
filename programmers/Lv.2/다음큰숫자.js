//통과
function solution(n) {
  let binaryN = n.toString(2);
  let cnt = binaryN.match(/1/g).length;
  let compareNumber;
  let compareNumberCnt = 0;

  while (true) {
    ++n;
    compareNumber = n.toString(2);
    compareNumberCnt = compareNumber.match(/1/g).length;
    if (cnt === compareNumberCnt) break;
    compareNumberCnt = 0;
  }
  return n;
}

console.log(solution(15));

// 통과
// function solution(n) {
//   let binaryN = n.toString(2).split('');
//   let cnt = 0;
//   let checkNumber;
//   let checkNumberCnt = 0;
//   binaryN.forEach((currentValue) => {
//     if (currentValue === '1') cnt += 1;
//   });

//   while (true) {
//     ++n;
//     checkNumber = n.toString(2).split('');
//     checkNumber.forEach((currentValue) => {
//       if (currentValue === '1') checkNumberCnt += 1;
//     });

//     if (cnt === checkNumberCnt) break;
//     checkNumberCnt = 0;
//   }
//   return n;
// }

// console.log(solution(15));
