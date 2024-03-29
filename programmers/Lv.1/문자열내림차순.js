function solution(string) {
  let lowerCase = new Array();
  let upperCase = new Array();

  let lower;
  let upper;
  for (key of string) {
    if (key === key.toUpperCase()) upperCase.push(key);
    else lowerCase.push(key);
  }
  lower = lowerCase.sort().reverse().join('');
  upper = upperCase.sort().reverse().join('');
  return lower + upper;
}
console.log(solution('BbcACdefg'));

// 좀더 간결한 다른 풀이
// return s.split('').sort().reverse().join('');
