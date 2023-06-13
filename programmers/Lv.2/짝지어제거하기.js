// 짝지어 제거하기
// stack 사용해서 구현하면 되지 않을까?

// 테스트 케이스, 효율성 성공
function solution(s) {
  let str = s;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length - 1] === str[i]) {
      stack.pop();
      continue;
    }
    stack.push(str[i]);
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution('cbcb'));
