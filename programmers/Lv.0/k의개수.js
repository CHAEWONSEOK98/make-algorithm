function solution(i, j, k) {
  let cnt = 0;
  let str = '';
  let strK = String(k);
  for (let s = i; s <= j; s++) {
    str += s;
  }
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === strK) cnt += 1;
  }

  return cnt;
}

console.log(solution(1, 13, 1));
