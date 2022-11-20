// 23 > 'cd'
// 51 > 'fb'
// 100 > 'baa'

// a:0 ~ j:9

let str = String(age);
str = str.replace(/0/g, 'a');
str = str.replace(/1/g, 'b');
str = str.replace(/2/g, 'c');
str = str.replace(/3/g, 'd');
str = str.replace(/4/g, 'e');
str = str.replace(/5/g, 'f');
str = str.replace(/6/g, 'g');
str = str.replace(/7/g, 'h');
str = str.replace(/8/g, 'i');
str = str.replace(/9/g, 'j');

return str;

function solution(age) {
  return age
    .toString()
    .split('')
    .map((v) => 'abcdefghij'[v])
    .join('');
}

// 정규식을 반복적으로 사용하여 풀이
// js 내장함수를 사용하여 풀이
// 내장함수를 사용하여 푼 경우가 범위가 커졌을 때 보완하기 쉬움.

// map((v) => 'abcdefghij'[v]) 이런 패턴을 알게됨.
// 23 > '23' > ['2', '3'] > ['c', 'd'] > 'cd'
