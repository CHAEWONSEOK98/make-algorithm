[풀이과정]
- 내적을 구하는 문제.
- 주어진 배열에서 각각의 인덱스 값을 곱해서 나온 값을 모두 더한다.

function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += (a[i] * b[i]);
  }
  return sum;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
