[문제풀이]
- 주어진 수를 문자열로 바꿔준 후 문자열의 크기만큼 반복문 실행
- 각각의 인덱스 값은 각 자릿수를 나타내므로 선언해둔 변수에 숫자로 바꿔서 각각 더해준다.
- 주어진 수를 다 더해진 변수로 나눴을 때 0이면 true 0이 아니면 false로 리턴.

function solution(x) {
  let numberToStr = String(x);
  let cnt = 0;
  for (let i = 0; i < numberToStr.length; i++) {
    cnt += Number(numberToStr[i]);
  }
  return x % cnt === 0 ? true : false;
}

console.log(solution(13));
