// edit file

function solution(nums) {
  let total = nums.length / 2;
  let set = new Set(nums);
  let arr = [...set];
  let cnt = 0;
  for (let i = 0; i < total; i++) {
    arr.pop();
    cnt += 1;
    if (arr.length === 0) return cnt;
  }
  return cnt;
}

console.log(solution([3, 3, 3, 2, 2, 4]));
