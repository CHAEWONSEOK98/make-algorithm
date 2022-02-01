//중복문자제거
/*소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램.
 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지.*/

function solution(str) {
  const set = new Set(str);
  let result = "";
  for (let item of set) {
    result += item;
  }
  return result;
}

const str = String("ksekkset");
console.log(solution(str));

/*
const dupArr = [1,2,3,1,2];
const set = new Set(dupArr);
const uniqueArr = Array.from(set);
console.log(uniqueArr) //[1,2,3]
*/

/*
function solution(s) {
  let answer='';
  //console.log(s.indexOf('k')):
  for(let i = 0; i<s.length; i++){
    //console.log(s[i], i, s.indexOf(s[i]));
    if(s.indexOf(s[i]===i) answer+=s[i]);
  }
  return answer;
}

console.log(solution("ksekkset"));
*/

//특정 문자 찾기
/*
function solution(s) {
  let answer = 0;
  let pos = s.indexOf('k');
  while(pos!==-1){
    answer++;
    pos = s.indexOf('k', pos+1);
  }
  return answer;
}

console.log(solution("ksekkset"));
*/
