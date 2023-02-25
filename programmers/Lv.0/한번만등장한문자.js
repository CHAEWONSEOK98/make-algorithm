// 입출력 예
// "abcabcadc" > "d"
// "abdc" > "abcd"
// "hello" > "eho"


[풀이과정]
- filter 함수를 사용하기 위해 주어진 문자열을 배열로 바꾼다.
- filter 함수를 사용하여 중복값이 있는 값을 걸러낸다.
- filter 함수와 includes 함수를 사용하여 두 배열의 차집합을 구한다.
- sort, join을 사용하여 정렬, 문자열로 바꾼후 리턴.
function solution(s) {
    let strToArr = s.split('');
    let duplicationValue = strToArr.filter((v, i) => strToArr.indexOf(v) !==i );
    let result = strToArr.filter(i => !duplicationValue.includes(i));
    return result.sort().join('');
}

console.log(solution('hello'))


// 처음에 생각했던 코드.
// 입출력 예시를 잘못보고 중복된 코드를 제거하는 문제인 줄 알았다.
// 중복된 값이 아예 존재하지 않은 값을 구해야한다.
// function solution(s) {
//     let set = [...new Set(s)];
//     let sort = set.sort();
//     return sort.join('');
// }

// console.log(solution('abcabcadc'));
