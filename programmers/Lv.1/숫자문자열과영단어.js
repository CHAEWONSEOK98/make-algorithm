// 2021 카카오 채용연계형 인턴십

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let result = s;
    for(let i = 0; i < numbers.length; i++){
        let arr = result.split(numbers[i]); 
        // 배열의 인덱스로 나눠준다. 문자열에 배열의 인덱스 값이 포함되어 있지 않은 경우 그대로 유지. 
        result = arr.join(i);
        // 배열의 인덱스로 나눠진 경우 해당 자리가 '' 공백으로 남는데 이곳에 인덱스 값 = 문자열과 같은 숫자를 넣어준다.
    }
    return Number(answer);
}

console.log(solution('one4seveneight'));

다른 풀이
function solution(s) {
    let answer = 0;
    
    s = s.replace(/zero/g, 0);
    s = s.replace(/one/g, 1);
    s = s.replace(/two/g, 2);
    s = s.replace(/three/g, 3);
    s = s.replace(/four/g, 4);
    s = s.replace(/five/g, 5);
    s = s.replace(/six/g, 6);
    s = s.replace(/seven/g, 7);
    s = s.replace(/eight/g, 8);
    s = s.replace(/nine/g, 9);
    
    answer = Number(s);
    return answer;
}
