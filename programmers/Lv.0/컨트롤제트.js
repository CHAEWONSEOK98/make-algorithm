[풀이방식]
주어진 문자열을 공백 기준으로 잘라서 배열로 만들어준다.
for문에서 현재 인덱스 값과 다음 인덱스 값을 찾을 수 있다.
Z를 제외한 각각의 숫자는 모두 더해야 하므로 숫자로 바꿔준 후
다음 인덱스 값이 Z인 경우 -를 붙여서 인덱스값을 할당한다.
반복문의 마지막 부분은 미리 선언해둔 변수에 각각의 인덱스 값을 더해준다.


function solution(s) {
    let strToArray = s.split(' ');
    let cnt = 0;
    for(let i = 0; i<strToArray.length; i++){
        strToArray[i] = Number(strToArray[i]);
        if(strToArray[i+1] === 'Z') {
            strToArray[i+1] = -strToArray[i];
        }
        cnt = cnt + strToArray[i];
    }

    return cnt;
}

console.log(solution('1 2 Z 3'))