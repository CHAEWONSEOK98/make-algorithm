// 1. 대문자와 소문자가 섞여있는 문자열이 주어진다.
// 2. 문자가 섞여있지만 각각 구별하지 않는다는 조건이 주어졌다.
// 3. 그러면 우선 대문자 or 소문자로 다 바꿔준다.
// 4. 반복문으로 각각의 인덱스값이 p or y인지 확인하여 맞다면 만들어둔 변수에 값을 1씩 더해준다.
// 5. 만들어둔 변수의 값이 같으면 true, 틀리면 false

function solution(string) {
  let answer = string.toLowerCase();
  let check1 = 0;
  let check2 = 0;
  for (key of answer) {
    if (key === 'p') check1 += 1;
    if (key === 'y') check2 += 1;
  }
  return check1 === check2 ? true : false;
}

console.log(solution('pPoooyY'));
