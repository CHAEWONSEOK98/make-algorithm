function solution(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') stack.push(str[i]);
    if (str[i] === ')') {
      if (stack.length === 0) return 'NO';
      else stack.pop();
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}

function solution(s) {
  let answer = 'YES';
  let stack = [];

  for (let x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

console.log(solution(')(())'));
