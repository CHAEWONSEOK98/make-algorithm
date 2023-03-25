[풀이과정] - 시간 오래 걸린 문제
- 문제에서 조건을 꼼꼼히 읽어야 한다는 것을 다시 느낌.
- x는 1x로 바꿔주는 과정 필요 > replace
- 문자열 중에서 x가 없는 상수항을 숫자형으로 바꿔주는 과정필요 > Number
- 1차항에서 한자리 수의 1차식만 생각해서 테스트케이스 통과 못했음.

if (result[i][result[i].length - 1] === 'x') {
    q = result[i].slice(0, [result[i].length - 1]);
    x = x + Number(q);
}
결과적으로 이 부분이 제일 시간을 할애한 부분.
1x ~ 9x가 아닌 11x 111x와 같은 1차식 값도 생각했어야함.

배열의 인덱스 값에서 마지막이 x인 값을 찾고,
그 x이전의 값들은 모두 숫자로 바꿔서 계산

마지막에 테스트케이스에서 3~4개가 계속 안풀렸는데
조건에 맞춰서 제출하는 것이 중요


function solution(polynomial) {
  let str = polynomial;
  let x = 0;
  let c = 0;
  let result = [];

  if (str[0] === 'x') str = ' ' + polynomial;

  let replaceStr = str
    .replace(/ x/g, '1x')
    .split(' +')
    .map((ele) => ele.trim());

  result = [...replaceStr];

  for (let i = 0; i < result.length; i++) {
    if (result[i][result[i].length - 1] === 'x') {
      q = result[i].slice(0, [result[i].length - 1]);
      x = x + Number(q);
    } else c = c + Number(result[i]);
  }

  if(x !== 0 && c !==0)return x===1 ?`x + ${c}` : `${x}x + ${c}`;
  if(x !== 0 && c ===0) return x === 1 ? 'x' : `${x}x`;
  if(x ===0 && c !== 0) return `${c}`;
  if(x ===0 && c ===0) return 0;
}

console.log(solution('x + 20'));
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ;
// function solution(polynomial) {
//   let str = polynomial;
//   let result = [];
//   let x = 0;
//   let c = 0;

//   if (str[0] === 'x') str = ' ' + polynomial;

//   let replaceStr = str.replace(/ x/g, '1x').split('');

//   for (let i = 0; i < replaceStr.length; i++) {
//     if (replaceStr[i] !== ' ') result.push(replaceStr[i]);
//   }

//   for (let i = 0; i < result.length; i++) {
//     if (result[i + 1] === 'x') x += Number(result[i]);
//     else if (result[i - 1] === '+' && result[i + 1] === '+')
//       c += Number(result[i]);
//   }

//   return c === 0 ? `${x}x` : `${x}x + ${c}`;
// }

// console.log(solution('x + x + x'));
