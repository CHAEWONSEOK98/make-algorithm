// Two Pointers Algorithm

function solution(m, arr) {
  let result = 0,
    sum = 0,
    left = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > m) {
      sum -= arr[left++];
    }
    result += right - left + 1;
  }
  return result;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
