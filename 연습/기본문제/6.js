//홀수
/*7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
고른 홀수들 중 최소값을 찾는 프로그램.
ex) 12, 77, 38, 41, 53, 92, 85 의 경우 합 256. 최소값 41
*/

function solution(arr) {
  const brr = [];
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      brr.push(arr[i]);
    }
  }
  brr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < brr.length; i++) {
    sum = sum + brr[i];
  }
  answer.push(sum);
  answer.push(brr[0]);

  return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

//출처:한국정보올림피아드

/*
function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for(let item of arr){
    if(item%2!==0){
      sum+=item;
      if(item<min) min=item;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr=[12,77,38,41,53,92,85];
console.log(solution(arr));
*/
