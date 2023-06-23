// sort를 깊게 사용할 수 있는 사람이 될 수 있도록..../
// sort 메서드를 통해 a + b | b + a 비교
// a = 3, b = 30 >> a + b = 330, b + a = 303
// 이 두 문자열을 비교해 내림차순으로 더 큰게 앞에 오도록 (b+a) - (a+b) 리턴

function solution(numbers) {
  let result = numbers
    .map((currentValue) => String(currentValue))
    .sort((a, b) => b + a - (a + b))
    .join('');
  return result[0] === '0' ? '0' : result;
}

console.log(solution([3, 30, 34, 5, 9]));

// 참고 199 % 10 = 9
// 테스트케이스 15개중 8개 맞음
// 나열의 조건을 찾아야 하는 문제인가?
// 앞자리 수 > 10으로 나눈 나머지 값을 크기 순으로 배열을 정렬.
// function solution(numbers) {
//   let arr = numbers.map((currentValue) => [
//     currentValue,
//     String(currentValue)[0],
//     currentValue % 10,
//   ]);
//   arr.sort((a, b) => {
//     if (a[1] === b[1]) return b[2] - a[2];
//     else return b[1] - a[1];
//   });
//   console.log(arr);
//   let str = '';

//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i][0];
//   }
//   return str;
// }

// console.log(solution([3, 30, 34, 5, 9]));

//////////////////////////////////////////////////////////////////////////////////

// 10으로 나눴을 때 나머지가 가장 큰 값을 나열?
// 예제통과, 테스트케이스 15개중 3개 통과
// 이 접근 방식이 틀렸던 것 같다.
// function solution(numbers) {
//   let arr = numbers.map((currentValue) => [currentValue, currentValue % 10]);
//   arr.sort((a, b) => {
//     if (a[1] === b[1]) return b[0] - a[0];
//     else return b[1] - a[1];
//   });

//   let str = '';

//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i][0];
//   }
//   return str;
// }

// console.log(solution([3, 30, 34, 5, 9]));
