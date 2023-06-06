[풀이과정]

- 주어진 예시를 그대로 수식으로 표현
- 표현은 그대로 했지만, b의 값에 따라 되돌려 받는 콜라 병의 갯수가 달라지므로 b값 고려.
- 전체 병의 갯수가 주어진 a보다 작아지는 순간까지 반복
- 반복문에서 돌려받는 병의 갯수를 확인

function solution(a, b, n) {
  let total = n;
  let cnt = 0;

  while (true) {
    if (total < a) break;
    let returnValue = total - (total % a);
    let refill = ((total - (total % a)) / a) * b;

    total = total - returnValue + refill;
    cnt = cnt + refill;
  }

  return cnt;
}

console.log(solution(3, 1, 20));
