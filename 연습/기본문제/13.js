//대소문자 변환
/*대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 
변환하여 출력하는 프로그램*/

function solution(str) {
  answer = "";
  for (let item of str) {
    item !== item.toUpperCase()
      ? (answer += item.toUpperCase())
      : (answer += item.toLowerCase());
  }
  return answer;
}

const str = String("StuDY");
console.log(solution(str));
