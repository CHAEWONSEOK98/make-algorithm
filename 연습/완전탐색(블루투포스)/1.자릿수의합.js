function solution(n, arrayNumber) {
  const arr = arrayNumber.sort((a, b) => b - a);
  const newArray = arr.map((item) => String(item));
  const result = [];
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < newArray[i].length; j++) {
      count += Number(newArray[i][j]);
    }
    result.push(count);
    count = 0;
  }
  const maxValue = Math.max(...result);
  const maxValueIndex = result.indexOf(maxValue);
  return arr[maxValueIndex];
}
const n = 7;
const arrayNumber = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(n, arrayNumber));

/*
function solution(n, arr){
  let answer, max=Number.MIN_SAFE_INTEGER;
  for(let x of arr){
    let sum=0, tmp=x;
    while(tmp){
      sum+=(tmp%10);
      tmp=Math.floor(tmp/10);
    }
    if(sum>max){
      max=sum;
      answer=x;
    }
    else if(sum===max){
      if(x>answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr))
*/

/*
function solution(n, arr){
  let answer, max=Number.MIN_SAFE_INTEGER;
  for(let x of arr){
    let sum=x.toString().split('').reduce((a, b) => a + Number(b), 0);
    if(sum>max){
      max=sum;
      answer=x;
    }
    else if(sum===max){
      if(x>answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr))
*/
