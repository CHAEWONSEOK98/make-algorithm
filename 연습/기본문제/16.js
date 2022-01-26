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
