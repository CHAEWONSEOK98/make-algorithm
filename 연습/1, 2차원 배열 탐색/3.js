function solution(arr, brr) {
  console.log(arr, brr);
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
