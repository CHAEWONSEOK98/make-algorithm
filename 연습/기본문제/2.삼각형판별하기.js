//삼각형 판별하기
//길이가 서로 다른 A,B,C 세 개의 막대 길이가 주어질 때 삼각형이 가능하면 YES 아니면 NO

function solution(a, b, c) {
  return a + b > c && a + c > b && b + c > a ? "YES" : "NO";
}

console.log(solution(13, 33, 17));

/*
function solution(a,b,c) {
  let answer = "YES";
  let max;
  let sum = a+b+c;
  if(a>b) max = a;
  else max = b;
  if(c>max) max = c;
  if((sum-max)<=max) answer="NO";
  return answer;
}

console.log(solution(13, 33, 17));
*/
