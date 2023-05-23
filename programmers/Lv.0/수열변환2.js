[문제 설명]
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.

이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다. 이러한 x 중 가장 작은 값을 return 하는 solution 함수를 완성해 주세요.

단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.

[입출력 예]
arr | result
[1,2,3,100,99,98] | 5

[풀이과정 예시]
반복 횟수	arr
0	[1, 2, 3, 100, 99, 98]
1	[3, 2, 7, 50, 99, 49]
2	[7, 2, 15, 25, 99, 99]
3	[15, 2, 31, 51, 99, 99]
4	[31, 2, 63, 51, 99, 99]
5	[63, 2, 63, 51, 99, 99]
6	[63, 2, 63, 51, 99, 99]

[풀이과정]
function solution(arr) {
    let prevArr = arr;
    let cnt = 0;
    
    while(true){
        
        let newArr = prevArr.map((ele) => {
            if(ele >= 50 && ele % 2 ===0){
                return ele / 2;
            }
            if(ele < 50 && ele % 2 !== 0) {
                return ele * 2 + 1;
            }
            return ele;
        })
        
        
        const result = prevArr.every((element, idx) => element === newArr[idx]);
        if(result){
            break;
        }
        cnt = cnt + 1;
        prevArr = newArr;
    }
    return cnt;
}