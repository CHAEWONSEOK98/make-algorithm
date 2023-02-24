// 어려워서 못푼 문제.. 다음에 다시 도전!
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 예시 코드에 맞춰서 코드를 짠 경우.
// 테스트코드 실행결과에 부합하는 답은 없음.
function solution(num, total) {
  let cal = 0;
  let centerValue = 0;
  let result = [];

  if (total % num === 0) {
    centerValue = total / num;
  } else {
    centerValue = Math.floor(total / num);
  }
  let startValue = Math.abs(num - centerValue);

  if (centerValue === 1) {
    for (let i = -centerValue; i < startValue; i++) {
      result.push(i);
      console.log(result);
    }
    return result;
  }

  for (let i = -startValue; i < num - startValue; i++) {
    cal = centerValue + i;
    result.push(cal);
    cal = 0;
  }
  return result;
}

console.log(solution(4, 14));
