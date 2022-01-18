//연필 개수
/*연필 1 다스는 12자루. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수
를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램*/

function solution(n) {
  let p;
  return n % 12 === 0 ? Math.floor((p = n / 12)) : Math.floor((p = n / 12 + 1));
}

console.log(solution(25));
