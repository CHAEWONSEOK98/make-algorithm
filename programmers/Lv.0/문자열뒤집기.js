// 문자열을 받고, for 루프를 통해서 각각의 인덱스 값을 역으로 더해주면 되지 않을까? 하는 생각

function solution(my_string) {
  let answer = '';
  for (let i = my_string.length - 1; i > -1; i--) {
    answer += my_string[i];
  }
  return answer;
}

console.log(solution('happy'));
