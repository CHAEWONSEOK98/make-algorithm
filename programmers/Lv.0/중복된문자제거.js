"people" > "peol"
"We are the world" > "We arthwold"

set > Set 객체로 만들어서 중복을 제거한다.

주어진 문자열을 set 함수를 사용하여 중복을 제거한 후,
스프레드 연산자를 이용하여 배열로 만들었다. 
마지막으로 join을 이용하여 문자열 합쳤다.

function solution(str) {
    const set = new Set(str);
    const result = [...set].join('');
    return result;
}

console.log(solution('people'))