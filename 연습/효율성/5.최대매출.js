// Sliding Window

function solution(k, arr) {
  let result,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  result = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    result = Math.max(result, sum);
  }
  return result;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
