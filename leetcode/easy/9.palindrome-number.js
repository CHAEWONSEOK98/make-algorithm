// Input: x = 121
// Output: true

// Input: x = -121
// Output: false

// Input: x = 10
// Output: false

function solution(x) {
  let str = String(x);
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

console.log(solution(121131));
