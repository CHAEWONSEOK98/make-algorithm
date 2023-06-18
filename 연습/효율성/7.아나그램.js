// Hash Map

function solution(str1, str2) {
  let result = 'YES';
  let sH = new Map();

  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  console.log(sH);
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  return result;
}

console.log(solution('AbaAeCe', 'baeeACAa'));
