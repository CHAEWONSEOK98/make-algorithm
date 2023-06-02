function solution(s, n) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    let asc = s.charCodeAt(i);

    if (asc >= 65 && asc <= 90) {
      asc = asc + n;
      if (asc > 90) {
        asc = asc - 26;
      }
    } else if (asc >= 97 && asc <= 122) {
      asc = asc + n;
      if (asc > 122) {
        asc = asc - 26;
      }
    }

    asc = String.fromCharCode(asc);

    result = result + asc;
  }
  return result;
}

console.log(solution('ajdkflqmlkAKSDMFLQ', 15));
