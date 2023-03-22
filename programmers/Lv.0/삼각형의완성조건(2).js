[풀이과정]
- 삼각형 조건 : 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.

삼각형 조건에 맞는 조건을 생각하고 코드로 구현.

first_condition > 두 값 중에 더 큰 값보다 큰 수부터 두 값을 합친 값보다 작은 수까지.
second_condition > 큰 수에서 작은 수를 뺀 값보다 큰수부터 두 값중 큰수까지


function solution(sides) {
    let sum = sides[0] + sides[1];
    let subtraction = Math.abs(sides[0] - sides[1]);
    let maxNumber = Math.max(...sides);
    let minNumber = Math.min(...sides);
    let first_condition = sum - maxNumber - 1;
    let second_condition = maxNumber - subtraction;
    return first_condition + second_condition; 
}

console.log([3,6])