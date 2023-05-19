queries 내 인덱스에 해당할 때 주어진 arr의 값을 1씩 증가하는 문제인 것으로 착각.
제발 제발 문제를 잘 읽어야 할 필요가 있다.

이 문제는 queries 내의 배열 요소들은 구간을 나타내는 것이며,
그 구간에 해당하는 i 값에 arr[i]에 1씩 추가해줘야한다.

// 통과된 코드
function solution(arr, queries) {
    let q = arr;
    queries.forEach(function(currentValue, index) {
        for(let i = currentValue[0]; i<= currentValue[1]; i++){
            q[i]++;
        }
    })
    return q;
}

console.log(solution([0, 1, 2, 3, 4], [[1, 1],[1, 1],[2, 3]]))


// 통과되지 못한 코드
function solution(arr, queries) {
    let q = [].concat(...queries);
    q.forEach(function(currentValue) {
        arr[currentValue] += 1;
    })
    return arr;
}

console.log(solution([0, 1, 2, 3, 4], [[1, 1],[1, 1],[2, 3]]))




