//가장 긴 문자열
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램

function solution(arr) {
  let brr = [];
  brr.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > brr[0].length) brr[0] = arr[i];
  }
  console.log(brr[0]);
}

const arr = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(arr));

/*
function solution(s) {
  let answer, max=Number.MIN_SAFE_INTEGER;
  for(let x of x){
    if(x.length>max){
      max=x.length;
      answer = x;
    }
  }
  return answer;
}

let str=["teacher", "time", "student", "beautiful", "good"]
console.log(solution(str));
*/
