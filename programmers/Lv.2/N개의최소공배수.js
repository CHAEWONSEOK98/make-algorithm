function solution(arr) {
  let cnt = Math.max(...arr);

  while (true) {
    let valid = arr.every((currentValue) => cnt % currentValue === 0);
    if (valid) {
      break;
    }
    cnt++;
  }
  return cnt;
}

console.log(solution([1, 2, 3]));
