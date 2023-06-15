// Summer/Winter Coding(~2018)
// 점프와 순간 이동

[풀이과정]
- k칸 만큼 점프 > k만큼 건전지 소모
- 현재까지 온 거리 x 2 순간이동 가능
- 주어진 n을 기준으로 다시 되돌아간다고 생각, n > 0
- 2로 나눠지면 2로 최대한 나누고, 안나눠지는 경우 1을 뺀다. 1을 뺄 때 카운트

function solution(n) {
  let cnt = 0;
  while (true) {
    if (n === 0) break;
    else if (n % 2 === 0) {
      n = n / 2;
      continue;
    } else if (n % 2 !== 0) {
      n = n - 1;
      cnt++;
      continue;
    }
  }
  return cnt;
}

console.log(solution(5000));
