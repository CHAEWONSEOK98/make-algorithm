// A문자열 마지막 인덱스 값을 변수에 할당 후 첫 번째 인덱스로 옮김

// 위와 같은 과정이 일어나면 문자열의 순서가 바뀌기 때문에
// 바뀌는 문자열을 대상으로 마지막 인덱스 값 전까지 잘라준다.

// 바뀌는 문자열의 값은 구했던 마지막 인덱스 값과 자른 문자열을 합한 값이다.

// 주어진 A 또는 B의 길이 만큼 반복한다.

function solution(A, B) {
  let str = A;
  let result = A;
  let cutStr;
  let lastToFirst;
  if (A === B) return 0;
  for (let i = 1; i <= A.length; i++) {
    lastToFirst = str[str.length - i]; //o
    cutStr = result.substr(0, str.length - 1); //hell
    result = lastToFirst + cutStr; //ohell
    if (result === B) return i;
    console.log(lastToFirst, cutStr, result);
  }
  return -1;
}

console.log(solution('hello', 'ohell'));

// 다른사람 풀이
// 코드 자체가 깔끔하고 실제로 더 많이 쓰이는 방식 같다.
// 문자열을 더한 후 indexOf함수 사용을 생각한 것이 스마트하다.
function solution(A, B) {
  let result = (B + B).indexOf(A);
  return result;
}
