//문자 찾기
/*
한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 
존재하는지 알아내는 프로그램. 문자열의 길이는 100을 넘지 않는다.
*/

function solution(str) {
  let cnt = 0;

  for (let item of str) {
    if (item === uniqueStr) {
      cnt++;
    }
  }
  return cnt;
}

const str = String("COMPUTERPROGRAMMING");
const uniqueStr = String("R");
console.log(solution(str));

/*
function solution(s, t){
  let answer = 0;
  for(let item of s){
    if(item===t) answer++;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'G'));
*/

/*
function solution(s, t){
  let answer = s.split(t).length;
  return answer - 1;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'G'));
*/
