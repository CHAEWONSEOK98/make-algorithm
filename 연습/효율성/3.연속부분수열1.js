// Two Pointers Algorithm

function solution(m, arr) {
  let result = 0,
    left = 0,
    sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (sum === m) result++;
    while (sum >= m) {
      sum -= arr[left++];
      if (sum === m) result++;
    }
  }
  return result;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
