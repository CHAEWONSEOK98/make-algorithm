function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length; ) {
    let twoDimensionalArray = [];
    for (let j = 0; j < n; j++) {
      twoDimensionalArray.push(num_list[i]);
      i++;
    }
    result.push(twoDimensionalArray);
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));

//다른 풀이
function solution(num_list, n) {
  let result = [];
  while (num_list.length) {
    result.push(num_list.splice(0, n));
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
