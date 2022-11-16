생각!
문자열에서 숫자를 제외한 후 숫자만 정렬?
parseInt 로 값 확인해서 NaN이면 기존 문자열에서 제거.

>> 위처럼 생각했는데 좀더 간편한 방법을 생각
정규식으로 문자를 제거하여 숫자만을 표현한 문자열을 배열로 변환.

function solution(my_string) {
    let removeString = my_string.replace(/[a-z]/g, '');
    let result = [];
    for(key of removeString) {
        result.push(parseInt(key));
    }
    return result.sort();
}

console.log(solution('hi12392'))

다른 풀이 참고
my_string.split("").filter((v) => !isNaN(v)).map((v) => v*1).sort((a,b) => a-b)