function solution(left, right) {
  let cnt = 0;
  let cntArr = [];
  let result = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) cnt += 1;
    }
    if (cnt % 2 === 0) cntArr.push(+i);
    else cntArr.push(-i);
    cnt = 0;
  }
  result = cntArr.reduce((acc, cul, idx) => {
    return (acc += cul);
  }, 0);
  return result;
}

console.log(solution(13, 17));

//다른풀이
Number.isInteger(Math.sqrt(i)); // "제곱근이 정수면 약수의 갯수가 홀수" 를 이용하여 푸는 것도 가능하다.
