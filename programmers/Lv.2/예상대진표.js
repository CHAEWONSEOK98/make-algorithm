// 2017 팁스타운
// 예상 대진표

// [풀이과정]
// 키포인트 : 결국 둘이 만나야 하는 문제
// 둘이 만날 때까지 2배씩 인원은 줄어드니까 각각 2로 나눈 값을 올림
// 다음 토너먼트로 넘어가면 카운터 체크
// 주어진 a값과 b값이 같아지면 종료

// 12  34  56  78
//   12     34
//      1 2
//       1

function solution(n, a, b) {
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    cnt++;
    if (a === b) break;
  }
  return cnt;
}

console.log(solution(8, 4, 7));

// 실패코드
// function solution(n, a, b) {
//   let first = a;
//   let second = b;
//   let cnt = 0;

//   for (let i = 0; i < n; i++) {
//     first = Math.ceil(first / 2);
//     second = Math.ceil(second / 2);
//     cnt++;
//     if (first + 1 === second) {
//       cnt++;
//       break;
//     }
//   }
//   return cnt;
// }

// console.log(solution(16, 3, 14));
