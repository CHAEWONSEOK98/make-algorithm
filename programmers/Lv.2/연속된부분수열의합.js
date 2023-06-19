// 연속된 부분 수열의 합

// 통과
// 반복문 내에서는 최대한 간단하게 로직을 작성
// 반복문에서 빠져나온 후 정렬하여 결과 도출.
function solution(sequence, k) {
  let result = [];
  let sum = 0;
  let left = 0;

  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];
    if (sum === k) result.push([left, right, right - left, left]);
    while (sum > k) {
      sum -= sequence[left++];
      if (sum === k) result.push([left, right, right - left, left]);
    }
  }

  result.sort((a, b) => {
    if (a[2] === b[2]) return a[3] - b[3];
    else return a[2] - b[2];
  });
  return result[0].slice(0, 2);
}

console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));

//시간 초과로 테스트케이스에서 1개가 안풀림
// function solution(sequence, k) {
//   let result = [Number.MAX_SAFE_INTEGER];
//   let sum = 0;
//   let left = 0;

//   for (let right = 0; right < sequence.length; right++) {
//     sum += sequence[right];
//     if (sum === k) {
//       let arr = sequence.slice(left, right + 1);
//       if (arr.length < result[0]) {
//         result[0] = arr.length;
//         result[1] = [left, right];
//       }
//     }
//     while (sum > k) {
//       sum -= sequence[left++];
//       if (sum === k) {
//         let arr = sequence.slice(left, right + 1);
//         if (arr.length < result[0]) {
//           result[0] = arr.length;
//           result[1] = [left, right];
//         }
//       }
//     }
//   }

//   return result[1];
// }

// console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));

// 실패 signal: aborted (core dumped) | 런타임에러
// function solution(sequence, k) {
//   let result = [];
//   let lengthArr = [];
//   let indexArr = [];
//   let sum = 0;
//   let left = 0;

//   for (let right = 0; right < sequence.length; right++) {
//     sum += sequence[right];
//     if (sum === k) {
//       let arr = sequence.slice(left, right + 1);
//       result.push(arr);
//       lengthArr.push(arr.length);
//       indexArr.push([left, right]);
//     }
//     while (sum > k) {
//       sum -= sequence[left++];
//       if (sum === k) {
//         let arr = sequence.slice(left, right + 1);
//         result.push(arr);
//         lengthArr.push(arr.length);
//         indexArr.push([left, right]);
//       }
//     }
//   }

//   let min = Math.min(...lengthArr);
//   let check = lengthArr.indexOf(min);
//   return indexArr[check];
// }

// console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
