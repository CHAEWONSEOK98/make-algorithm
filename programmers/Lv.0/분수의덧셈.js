// 분자를 구한다. 분모를 구한다.
// 초기 최대공약수 값을 1로 설정한다.
// 최대공약수를 구한 후 분자와 분모를 각각 최대공약수로 나눠준다.

function solution(denum1, num1, denum2, num2) {
  let numerator = num1 * denum2 + num2 * denum1;
  let denominator = num1 * num2;
  let maxDivision = 1;
  for (let i = 1; i <= numerator; i++) {
    if (numerator % i === 0 && denominator % i === 0) {
      maxDivision = i;
    }
  }
  return [numerator / maxDivision, denominator / maxDivision];
}

console.log(solution(1, 2, 3, 4));
