function solution(n) {
  let answer = '';
  function recursion(n) {
    if (n === 0) return;
    else {
      recursion(parseInt(n / 2));
      answer += n % 2;
    }
  }
  recursion(n);
  return answer;
}

console.log(solution(25));
