// 문자열 배열 중 가장 긴 공통 접두사 문자열을 찾는 함수를 작성합니다.
// 공통 접두사가 없는 경우 빈 문자열 " "을(를) 반환합니다.

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""

function solution(arr) {
  let result = '';
  let standard = arr[0];

  for (let j = 0; j < standard.length; j++) {
    let cnt = 0;
    for (let i = 1; i < arr.length; i++) {
      if (standard[j] === arr[i][j]) {
        cnt++;
      }
    }
    if (arr.length - 1 !== cnt) {
      return result;
    }
    if (arr.length - 1 === cnt) result += standard[j];
  }
  return result;
}

console.log(solution(['aca', 'cba']));
