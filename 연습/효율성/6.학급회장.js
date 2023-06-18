// Hash Map

function solution(s) {
  let result;
  let stringHash = new Map();
  for (let x of s) {
    if (stringHash.has(x)) stringHash.set(x, stringHash.get(x) + 1);
    else stringHash.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of stringHash) {
    if (value > max) {
      max = value;
      result = key;
    }
  }

  return result;
}

console.log(solution('BACBACCACCBDEDE'));
