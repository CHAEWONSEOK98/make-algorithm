[문제풀이]
배열에서 indexOf함수를 사용하여 Kim에 해당하는 인덱스값을 구한다.

function solution(seoul) {
    const arr = seoul;
    const kimOrder = arr.indexOf('Kim');
    const result = `김서방은 ${kimOrder}에 있다`;
    return result;
}

console.log(solution(['Jane', 'Kim']))