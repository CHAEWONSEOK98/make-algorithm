// 귤 고르기
// ** obj[tangerine[i]] = ++obj[tangerine[i]] || 1 **

function solution(k, tangerine) {
  const obj = {};
  let sum = 0;
  let cnt = 0;

  for (let i = 0; i < tangerine.length; i++) {
    // obj[] 값이 있으면 1을 더한 값을
    // obj[] 값이 없으면 1을 할당
    obj[tangerine[i]] = ++obj[tangerine[i]] || 1;
  }

  // Object.values 값 추출
  let arr = Object.values(obj).sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    cnt++;
    if (sum >= k) break;
  }
  return cnt;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
