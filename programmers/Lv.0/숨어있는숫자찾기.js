//내 풀이
let answer = my_string.replace(/[a-zA-Z]/g, '');
let result = 0;
for (key of answer) {
  result += Number(key);
}
return result;

//다른 풀이
let answer = my_string
  .replace(/[^0-9]/g, '') // 문자열에서 숫자 제외 모두 공백으로
  .split('')
  .reduce((acc, curr) => acc + Number(curr), 0);
