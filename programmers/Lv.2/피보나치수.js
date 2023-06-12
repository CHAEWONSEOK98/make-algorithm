// 피보나치 - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, ...
// F0 = 0
// F1 = 1
// Fn = F(n-1) + F(n-2)

// Bottom-up 방식 - 반복문으로 구현했을 때, 런타임 에러가 발생하지 않았다.
function solution(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
  }

  return fib[n];
}

console.log(solution(5));

///////////////////////////////////////////////////////////////////

// 런타임 에러
function solution(n) {
  let newArr = [0, 1];

  let fib = (n) => {
    if (newArr[n] !== undefined) return newArr[n] % 1234567;
    return (newArr[n] = (fib(n - 1) + fib(n - 2)) % 1234567);
  };

  return fib(n);
}

console.log(solution(6));

///////////////////////////////////////////////////////////////////

// 런타임에러
function solution(n) {
  let arr = [];

  function fibonacci(n) {
    if (n <= 1) return n;
    if (arr[n] !== undefined) return arr[n] % 1234567; // arr[n] 값이 undefined이 아니면 값 그대로 사용.
    return (arr[n] = fibonacci(n - 1) + fibonacci(n - 2)) % 1234567;
  }

  return fibonacci(n);
}

console.log(solution(50));

///////////////////////////////////////////////////////////////////

// 효율성 테스트 실패
function solution(n) {
  if (n <= 2) return 1;
  return solution(n - 1) + solution(n - 2);
}
