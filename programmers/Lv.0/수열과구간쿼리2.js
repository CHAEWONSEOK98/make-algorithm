수열과 구간 쿼리2

arr = [0, 1, 2, 4, 3];
queries = [[0, 4, 2],[0, 3, 2],[0, 2, 2]];
result = [3, 4, -1];

function solution(arr, queries) {
    let result = [];
    let p = [];
    let check = 0;
    
    queries.forEach(function(cur, idx) {
        for(let i = cur[0]; i <= cur[1]; i++){
            if(arr[i] > cur[2]) {
                result.push(arr[i])
            }
        }
        if(result.length === 0) p.push(-1);
        else {
            let check = Math.min(...result);
            p.push(check);
            result = [];
        }

    })
    return p;
}