// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false

// anagram.js 문제에서 원래 문자열이 인자로 입력되었는데 이 문제는 인자가 숫자.
// 그런데 문자열이나 숫자나 같은 값이 있는지 없는지와 전체적인 길이만 확인하면 되니까 숫자를
// 문자열로 바꿔준 후 같은 방식으로 문제를 해결.

function sameFrequency(first, second) {
  a = new String(first);
  b = new String(second);

  if (a.length !== b.length) return false;

  const obj = {};

  for (let i = 0; i < a.length; i++) {
    let letter = a[i];
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }

  for (let j = 0; j < b.length; j++) {
    let letter = b[j];
    if (!obj[letter]) return false;
    else {
      obj[letter] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(22, 222));
