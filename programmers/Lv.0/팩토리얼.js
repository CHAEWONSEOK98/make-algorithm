function solution(n) {
  let result = 0;
  for (let i = 1; i <= 10; i++) {
    if (n >= factorial(i)) {
      result = i;
      continue;
    } else {
      break;
    }
  }
  return result;
}

function factorial(n) {
  returnFactorial = 1;
  for (let i = n; i >= 2; i--) {
    returnFactorial *= i;
  }
  return returnFactorial;
}

console.log(solution(5));
