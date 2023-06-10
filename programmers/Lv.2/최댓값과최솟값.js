// Math.max | Math.min 사용할 때 숫자가 아닌 문자열도 허용된다.
// 아래 코드에서 문자열을 숫자로 바꿔주는 과정이 생략되어도 가능하다.
// let stringToNumber = arr.map((item) => Number(item)); > 생략가능

// 통과된 코드
function solution(s) {
  let arr = s.split(' ');
  let stringToNumber = arr.map((item) => Number(item));
  let max = Math.max(...stringToNumber);
  let min = Math.min(...stringToNumber);
  return `${min} ${max}`;
}

console.log(solution('1 2 3 4'));

// 입출력 예 통과, 테스트 케이스 전체 불통과
function solution(s) {
  let arr = [];
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '-') {
      str = str + s[i] + s[i + 1];
      arr.push(Number(str));
      str = '';
    } else if (s[i - 1] === undefined || s[i - 1] === ' ') {
      arr.push(Number(s[i]));
    }
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return `${min} ${max}`;
}

console.log(solution('1 2 -3 3 -4'));
