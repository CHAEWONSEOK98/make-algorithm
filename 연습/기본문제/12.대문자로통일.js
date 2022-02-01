//대문자로 통일

/*
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력
하는 프로그램을 작성.
*/

function solution(str) {
  let answer = "";
  for (let item of str) {
    item !== item.toUpperCase()
      ? (answer += item.toUpperCase())
      : (answer += item);
  }
  return answer;
}

const str = String("ItisTimeToStudy");
console.log(solution(str));
