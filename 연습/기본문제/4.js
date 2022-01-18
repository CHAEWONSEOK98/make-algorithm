//1부터 N까지 합 출력하기
//자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램.

function solution(N) {
  let cnt = 0;
  for (let i = 0; i < N + 1; i++) {
    cnt = cnt + i;
  }
  return cnt;
}

console.log(solution(10));
