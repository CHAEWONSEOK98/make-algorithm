//최솟값 구하기
//7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램.

function solution(a, b, c, d, e, f, g) {
  const arr = new Array();
  arr[0] = a;
  arr[1] = b;
  arr[2] = c;
  arr[3] = d;
  arr[4] = e;
  arr[5] = f;
  arr[6] = g;
  arr.sort((a, b) => a - b);
  return arr[0];
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));

/*
function solution(arr){
  let answer, min.Number.MAX_SAFE_INTEGER;
  for(let i = 0; i<arr.length; i++){
    if(arr[i]<min) min=arr[i];
  }
  answer=min;
  return answer;
}

let arr=[5,7,1,3,2,9,11];
console.log(solution(arr))
*/

/*
function solution(arr){
  let answer, min = arr[0]
  for(let i = 1; i<arr.length; i++){
    if(arr[i]<min) min=arr[i];
  }
  answer=min;
  return answer;
}

let arr=[5,7,1,3,2,9,11];
console.log(solution(arr))
*/

/*
function solution(arr){
  let answer = Math.min(...arr);
  return answer;
}

let arr=[5,7,1,3,2,9,11];
console.log(solution(arr))
*/

/*
function solution(arr){
  let answer = Math.min.apply(null, arr);
  return answer;
}

let arr=[5,7,1,3,2,9,11];
console.log(solution(arr))
*/
