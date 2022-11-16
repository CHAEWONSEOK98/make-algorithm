function solution(my_str, n) {
  let arr = [...my_str];
  let strLength = my_str.length;
  let arrLength = Math.floor(strLength / n) + (strLength % n);
  let result = [];
  for (let i = 0; i < arrLength; i++) {
    if (arr.length === 0) break;
    result.push(arr.splice(0, n).join(''));
  }
  return result;
}

console.log(solution('abc1Addfggg4556b', 6));
