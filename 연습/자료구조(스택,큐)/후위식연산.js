// 후위식(postfix) 연산(stack)

function solution(s) {
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let right = stack.pop();
      let left = stack.pop();
      if (x === '+') stack.push(left + right);
      else if (x === '-') stack.push(left - right);
      else if (x === '*') stack.push(left * right);
      else if (x === '/') stack.push(left / right);
    }
  }
  return stack[0];
}

console.log(solution('352+*9-'));
