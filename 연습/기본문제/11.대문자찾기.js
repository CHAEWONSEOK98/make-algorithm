//대문자 찾기
/*
한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
을 작성
*/

function solution(str) {
  let cnt = 0;

  for (let item of str) {
    item === item.toLowerCase() ? null : cnt++;
  }
  return cnt;
}

const str = String("KoreaTimeGood");
console.log(solution(str));

/*
function solution(s) {
  let answer = 0;
  for(let item of s){
    //let num = item.charCodeAt();
    //if(num >= 65 && num <= 90) answer ++;
    if(item === item.toUpperCase()) answer++;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
*/
