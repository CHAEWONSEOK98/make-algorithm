[문제] 정수 제곱근 판별

[풀이과정]
주어진 n값을 JavaScript 내장 함수 Math.sqrt()를 사용하여 제곱근 판별.
처음에는 변수를 선언하고 판별된 제곱근의 값을 할당하여 조건문을 통해 결과값을
리턴하였지만 테스트 케이스에서 걸리는 부분을 보고 빠진 부분을 확인한다.

예를 들어 n이 13일 경우를 가정해보면 
let sqrt = Math.sqrt(13); // 3.605551275463989
let sqrt * sqrt = 12.999999999999998;
이러한 상황이 발생한다. 그래서 제곱근을 구할 때 소수점 이하를 버림하여 계산한다.

function solution(n) {
    let sqrt = Math.floor(Math.sqrt(n));
    if(sqrt * sqrt == n) return (sqrt +1) * (sqrt + 1);
    else return -1;
}

console.log(solution(121))