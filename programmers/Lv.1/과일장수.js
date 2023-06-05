// 런타임에러...를 생각해야 하는 문제

function solution(k, m, score) {
  if (score.length < m) return 0;

  let cnt = 0;

  score.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < Math.floor(score.length / m); i++) {
    let min = score[m * (i + 1) - 1];
    cnt = cnt + min * m;
  }
  return cnt;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
