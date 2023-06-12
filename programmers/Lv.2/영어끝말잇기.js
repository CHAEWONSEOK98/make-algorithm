// 통과
function solution(n, words) {
  let idx = 0;

  for (let i = 1; i < words.length; i++) {
    let wordLast = words[i - 1][words[i - 1].length - 1];
    let currentValue = words[i];

    if (
      words.indexOf(currentValue) < i ||
      currentValue.charAt(0) !== wordLast
    ) {
      idx = i;
      break;
    }
  }

  if (idx === 0) return [0, 0];
  return [(idx % n) + 1, Math.floor(idx / n) + 1];
}

console.log(
  solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ])
);

// 테스트케이스 20개 중 1개 실패
// function solution(n, words) {
//   let target = 0;
//   let fail = 0;

//   let outNumber = 0;
//   let outOrder = 0;

//   let last = 0;
//   let first = 0;

//   for (let i = 0; i < words.length; i++) {
//     if (words.indexOf(words[i], i + 1) !== -1) {
//       target = words.indexOf(words[i], i + 1);
//       break;
//     }
//     if (i <= words.length - 2) {
//       last = words[i][words[i].length - 1];
//       first = words[i + 1][0];
//       if (last !== first) {
//         fail = i + 1;
//         break;
//       }
//     }
//   }

//   if (target !== 0) {
//     outNumber = (target % n) + 1;
//     outOrder = Math.ceil((target + 1) / n);
//     console.log(target, outNumber, outOrder);
//     return [outNumber, outOrder];
//   }

//   if (fail !== 0) {
//     outNumber = Math.floor(fail % n) + 1;
//     outOrder = Math.ceil((fail + 1) / n);
//     console.log(fail, outNumber, outOrder);
//     return [outNumber, outOrder];
//   }

//   return [0, 0];
// }

// console.log(
//   solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])
// );
