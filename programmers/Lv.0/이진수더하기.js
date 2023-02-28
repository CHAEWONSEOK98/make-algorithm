[문제]
bin1 / bin2 / result
'10'    '11'    '101'
'1001'  '1111'  '11000'

[풀이]
주어진 bin1, bin2의 2진수 값을 parseInt()를 사용하여 찾는다.
parseInt()로 더해진 값을 toString()으로 나타낸다.


function solution(bin1, bin2){
    let result = parseInt(bin1, 2) + parseInt(bin2, 2);
    return result.toString(2);
}

console.log(solution('10', '11'));