//중복단어제거
/*
N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
출력하는 문자열은 원래의 입력순서를 유지합
*/

function solution(arr) {
  const set = new Set(arr);
  return set;
}

const arr = ["good", "time", "good", "time", "student"];
console.log(solution(arr));

/*

function solution(s) {
  let answer;
  //console.log(s.indexOf("time"));
  answer=s.filter(function(v, i){
    //if(s.indexOf(v)===i) return true;
    return s.indexOf(v) === i;
  });
  return answer;
}

const arr = ["good", "time", "good", "time", "student"];
console.log(solution(arr));
*/
