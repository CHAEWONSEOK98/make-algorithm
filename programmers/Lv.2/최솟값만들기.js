// 테스트 케이스, 효율성 테스트 통과
function solution(A, B) {
  let a = A.sort((a, b) => a - b);
  let b = B.sort((a, b) => b - a);

  let cnt = 0;

  for (let i = 0; i < a.length; i++) {
    cnt = cnt + a[i] * b[i];
  }

  return cnt;
}

console.log(solution([1, 2], [3, 4]));

// 테스트 케이스 올 통과, 효율성 테스트 올 불통과
// function solution(A,B){
//     let min = 0;
//     let max = 0;

//     let minIndex = 0;
//     let maxIndex = 0;

//     let cnt = 0;

//     while(true){
//         if(A.length === 0) break;
//         min = Math.min(...A);
//         max = Math.max(...B);
//         cnt = cnt + min * max;

//         minIndex = A.indexOf(min);
//         maxIndex = B.indexOf(max);

//         A.splice(minIndex, 1);
//         B.splice(maxIndex, 1);
//     }

//     return cnt;
// }

// console.log(solution([1, 2], [3, 4]))
