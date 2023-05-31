[풀이과정]
모든 값이 처음이라는 가정으로 먼저 -1을 result 배열에 넣어준다.
-1를 result배열에 넣어줌과 동시에 compare 배열에는 s 문자열의 인덱스 값을 넣어준다.

이중 반복문을 사용함은 현재 값과 현재 값 이전의 값들을 비교하기 위함이다.

조건문이 없을 때는 온전하게 s의 인덱스 값들이 compare 배열에 들어간다.
이중 반복문 내부에 있는 반복문에서 마지막에 compare 배열로 들어간 값과
즉 현재 i값의 s[i] 값 = compare[compare.length-1]
이전의 compare 인덱스 값들을 비교한 후 같은 값이 있다면

처음 나온 값으로 가정해서 -1을 넣었던 result배열에서 -1를 빼고
몇 번째 전에 같은 값이 나왔는지 i, j값을 통해 유추한다.

같은 값이 지속적으로 나와도 마지막에 나온 가장 가까운 같은 값이
result 배열로 푸쉬된다.

function solution(s) {
    let arr = [...s];
    let compare = [];
    let result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(-1);
        compare.push(arr[i])
        for(let j = 0; j < i; j++){
            if(compare[compare.length-1]===s[j]) {
                result.pop();
                result.push(i-j);
            }
            
        }
    }

    return result;
}

console.log(solution("foobar"));
