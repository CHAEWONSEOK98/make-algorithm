처음에 코드를 작성했을 때 테스트 케이스에서 걸리는 오류가 있었다.
분명 문제에서 제시한 경우를 대입했을 때는 오류가 없어서 코드 전체적인
문제가 있는 것으로 생각했다.
그런데 주어진 경우가 1일 때 생각을 하지 못했다.
조건문을 사용하여 예외 처리를 한 후 오류를 지울 수 있었다.

*문제를 정확하게 읽자.

function solution(cipher, code) {
    let result = '';
    if(cipher === 1) return cipher[0];
    if(code ===1) return cipher;
    for(let i = 1; i<=cipher.length; i++){
                if(cipher[i*code-1] === undefined) return result;
        result += cipher[i*code-1];

    }
}

console.log(solution("dfjardstddetckdaccccdegk", 4))