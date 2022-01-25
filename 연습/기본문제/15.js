//가운데 문자 출력
/*
소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세
요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력
*/

function solution(str) {
  if (str.length % 2 === 0) {
    let a = str.substr(str.length / 2 - 1, 2);
    return a;
  } else if (str.legnth % 2 !== 0) {
    let b = str.substr(Math.floor(str.length / 2), 1);
    return b;
  }
}

let str = String("study");
console.log(solution(str));
