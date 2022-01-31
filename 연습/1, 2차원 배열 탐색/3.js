function solution(arr, brr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      if (brr[i] === 1) {
        result.push("D");
      } else if (brr[i] === 2) {
        result.push("B");
      } else if (brr[i] === 3) {
        result.push("A");
      }
    } else if (arr[i] === 2) {
      if (brr[i] === 1) {
        result.push("A");
      } else if (brr[i] === 2) {
        result.push("D");
      } else if (brr[i] === 3) {
        result.push("B");
      }
    } else if (arr[i] === 3) {
      if (brr[i] === 1) {
        result.push("B");
      } else if (brr[i] === 2) {
        result.push("A");
      } else if (brr[i] === 3) {
        result.push("D");
      }
    }
  }
  return result;
}

const arr = [2, 3, 3, 1, 3];
const brr = [1, 1, 2, 2, 3];
console.log(solution(arr, brr));

/*
function solution(a, b) {
  let answer='';
  for(let i = 0; i<a.length; i++){
    if(a[i]===b[i]) answer += 'D'+' ';
    else if(a[i]===1 && b[i]===3) answer += 'A'+' ';
    else if(a[i]===2 && b[i]===1) answer += 'A'+' ';
    else if(a[i]===3 && b[i]===2) answer += 'A'+' ';
    else answer+= 'B'+' ';
  }
  return answer;
}

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
*/
