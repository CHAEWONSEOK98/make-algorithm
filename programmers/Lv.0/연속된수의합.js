// 어려워서 못푼 문제.. 다음에 다시 도전!
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


// 재도전 코드

total 값이 0부터 1000사이니까 특정 값의 범위를 반복문을 통해 실행해서 i i+1 i+2 === total
이런 방법으로 값을 구하는 건 안될까?

답은 통과했지만
개념적으로는 올바르지 못한 접근이라는 생각이 든다.
먼저 문제의 의도가 아닐 뿐더러 모든 문제, 모든 상황에서 범위를 광범위하게 지정할 수 없다.
그리고 사용하지 않아도 되는 값이 쓰이는 것이기 때문에 효율적이지 않다. 

function solution(num, total) {
  let arr = [];
  let result = 0;
  for(let i = -100; i < 1000; i++){
    for(let j = i; j < i + num; j++){
      arr.push(j);
      result = result + j;
    }
    if(result === total) return arr;
    else {
      arr = [];
      result = 0;
    }
  }
}

console.log(solution(4, 14));


[다른 풀이]
function solution(num, total) {
    const a = (2 * total / num + 1 - num) / 2
    return Array(num).fill().map((_, i) => i + a)
}

[다른 풀이]
  // 초기 값을 구하는 과정
  // total / num 으로 연속 되는 숫자의 중간 값을 구한다.
  // 구한 중간 값에서 num / 2의 내림을 해서 구한 자릿수 값을 빼고
  // 그 값을 올림으로 해서 초기 값을 구한다.

  // ex) num = 4 / total = 14
  // total / num = 3.5
  // num / 2 = 2
  // 3.5 - 2 = 1.5를 올림 처리해서 초기 값은 2

  function solution(num, total) {
    const min = Math.ceil(total / num - Math.floor(num / 2));

    // Array.from() 메서드를 이용해 구해둔 초기값 부터
    // num의 길이 만큼 해서 답을 구한다.
    return Array.from({ length: num }, (_, i) => i + min);
  }


// 기존에 실행했던 코드
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
