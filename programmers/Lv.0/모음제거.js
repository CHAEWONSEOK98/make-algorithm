// 모음제거 문제.
// 정규식으로 문제를 풀면서 느낀점.
// JavaScript에서 정규식을 사용하면 보다 쉽게 문제에 접근하여 원하는 결과를 얻을 수 있다.

function solution(my_string) {
  let answer = my_string.replace(/[aeiou]/g, '');
}

console.log(solution('nice to meet you'));
