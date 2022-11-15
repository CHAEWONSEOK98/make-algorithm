function solution(array) {
  let arr = array;
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let indexNumber;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= maxNumber) {
      maxNumber = arr[i];
      indexNumber = i;
    }
  }
  return [maxNumber, indexNumber];
}

console.log(solution([1, 8, 3]));
