/*
각각의 위치한 점수에 등수를 정하고 위치한 자리에 맞춰서 출력,,
차라리 큰 수, 작은 수를 내림차순, 오름차순으로 출력하는거였다면,,
*/

//나중에 다시 풀어보기!

function solution(arr) {
  //let answer = [1,1,1,1,1];

  /*let answer = new Array(5);
  answer.fill(1);*/

  let answer = Array(5).fill(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        answer[i]++;
        console.log(answer);
      }
    }
  }
}

const arr = [87, 100, 92, 100, 76];
console.log(solution(arr));

/*
arr 배열 값이 중복이 없다는 가정하에 작성한 초기 코드.
그렇다면 중복이 있다면...? 

function solution(arr) {
  let compareArray = arr.slice().sort((a, b) => b - a);
  let resultArray = [];
  console.log(compareArray); // [100, 92, 89, 87, 76]
  for (let i = 0; i < compareArray.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (compareArray[i] === arr[j]) {
        resultArray.push(j + 1);
        console.log(resultArray);
      }
    }
  }
}

const arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
*/

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/*
function solution(arr) {
  let n=arr.length;
  let answer=Array.from({length:n}, ()=>1);
  for(let i=0; i<n; i++){
    for(let j= 0; j<n; j++){
      if(arr[j]>arr[i]) answer++;
    }
  }
  return answer;
}

let arr=[92,92,92,100,76];
console.log(solution(arr));
*/
