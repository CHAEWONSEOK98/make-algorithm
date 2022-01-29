//큰 수 출력하기
/*
N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램
(첫 번째 수는 무조건 출력한다)
*/

function solution(arr) {
  let brr = [];
  brr.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) brr.push(arr[i + 1]);
  }
  return brr;
}

const Number = 6;
const arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

/*
function solution(arr){
  let answer = [];
  answer.push(arr[0]);
  for(let i = 1; arr.length; i++){
    if(arr[i] > arr[i-1]) answer.push(arr[i]);
  }
  return answer;
}
const arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
*/
