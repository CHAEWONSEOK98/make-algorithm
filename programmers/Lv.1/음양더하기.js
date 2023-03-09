[풀이과정]
- true, false 값이 담긴 배열에서 true, false 값을 +, -로 바꿈.
- replace() 함수를 사용하기 위해 join()함수를 사용하여 먼저 문자열로 바꿔준 후 true는 +로 false는 -로 바꿈.
- 반복문을 사용하여 +, -만 담긴 배열과 숫자가 담긴 배열의 인덱스 각각의 값을 더한 후 숫자로 바꾸고 빈배열로 push.
- reduce()함수를 사용하여 배열의 전체 값을 합함.

function solution(absolutes, signs) {
    let result = [];
    let strAndReplace = signs.join('').replace(/true/g, '+').replace(/false/g, '-');

    for(let i = 0; i<signs.length; i++){
        result.push(Number(strAndReplace[i]+absolutes[i]))
    }
    return result.reduce((acc, cur, idx) => {return acc += cur;}, 0)
}

console.log(solution([4,7,12], [true,false,true]))