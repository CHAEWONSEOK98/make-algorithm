[문제]
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수를 만드는 것

*소수 : 1과 자기 자신으로만 나누어지는 수를 의미


function solution(n) {
    let arr = Array(n+1).fill().map((e, i) => i); // 0 ~ 10
    for (let i = 2; i <= n; i++) {
        if (arr[i] === 0) continue;
        for (let j = i+i; j <= n; j += i) {
            arr[j] = 0;
        }
    }
    return arr.filter(el => el !== 0).length-1;
}

console.log(solution(10))

// 처음에 2, 3, 5, 7의 배수를 제거하고 소수를 구한 경우 시간초과
function solution(n){
    let arr = Array(n).fill().map((e, i) => i+1);
    let result2 = arr.filter(e => e % 2 !== 0);
    let result3 = result2.filter(e => e % 3 !== 0);
    let result5 = result3.filter(e => e % 5 !== 0);
    let result7 = result5.filter(e => e % 7 !== 0);
    if(n === 2) return 1;
    else if (n <= 3) return 2;
    else if(n <= 5) return 3;
    else if(n <= 7) return 4;
    for(let i = 1; i<n; i++){
        for(let j = i+1; j<n; j++){
            if(result7[j] % result7[i] === 0){
                result7.splice(j,1);
            }
        }
    }
    return result7.length+3;
}

console.log(solution(25))

// 2의 배수를 제외하고 시작해도 시간초과로 문제가 풀리지 않음.
function solution(n){
    let arr = Array(n).fill().map((e, i) => i+1);
    let result = arr.filter(e => e % 2 !== 0);
    
    for(let i = 1; i<n; i++){
        for(let j = i+1; j<n; j++){
            if(result[j] % result[i] === 0){
                result.splice(j,1);
            }
        }
    }
    return result;
}

console.log(solution(10))


//에라토스테네스의체 참고해서 풀이한 문제 - 테스트 케이스 10, 11, 12 시간초과
//for문을 사용하지 않고 풀어야 하는 문제인가?
[1,2,3,4,5]
[1,2,3,4,5,6,7,8,9,10] > [1,2,3,5,7,9];
   j j j                      i j
function solution(n){
    let arr = Array(n).fill().map((e, i) => i+1);
    for(let i = 1; i<n; i++){
        for(let j = i+1; j<n; j++){
            if(arr[j] % arr[i] === 0){
                arr.splice(j,1);
            }
        }
    }
    return arr.length-1;
}

console.log(solution(10))


// - 에러사항
// 1. Uncaught RangeError: Maximum call stack size exceeded
// 2. 재귀함수 안에서 let result = []으로 선언하여 결과값이 빈 배열로 리턴되는 것.
// >> result = [] 빈 배열을 재귀함수의 매개변수로 넘겨주니 재귀함수 내에서 초기화되지않음

// 테스트 케이스 12개 중에서 9, 10, 12 - 런타임 에러
                        // 11 - 시간초과로 실패
function recursion(num, result) {
    let cnt = 0;
    if(num % 2 === 0) {
        continue;
    }
    if(num === 1){
        return result.length;
    }
    for(let i = 1; i<=num; i++){
        if(num % i === 0) {
            cnt += 1;
        }
    }
    if(cnt === 2) result.push(num);
    num--;
    return recursion(num, result);
}

function solution(n) {
    let result = [];
    return recursion(5, result);
}
console.log(solution(5))


// 테스트 케이스 12개 중에서 10, 11, 12번은 시간초과로 실패 - 다른 코드로 바꾸기
// 이중 반복문, 조건문을 사용해서 소수 조건을 충족하면 되는 문제로 파악했으나,
// 이중 반복문은 성능은 O(N*N)을 가지고 있어서 확실히 느림. 속도 문제.
function solution(n) {
    let result = [];
    for(let i = 2; i<=n; i++){
        let cnt = 0;
        for(let j = i; j > 0; j--){
            if(i % j === 0) {
                cnt += 1;
            }
        }
        if(cnt === 2) {
            result.push(i);
        }
    }
    return result.length;
}

console.log(solution(5))