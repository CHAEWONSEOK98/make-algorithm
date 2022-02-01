//세 수 중 최솟값, 정렬x
function solution(a, b, c) {
  let p;
  a > b ? (p = b) : (p = a);
  p > c ? (p = c) : (p = p);
  return p;
}

console.log(solution(6, 5, 11));

/*
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
*/
