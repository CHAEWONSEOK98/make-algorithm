// 조합
// 식, nCr = (n-1 C r-1) + (n-1 C r);
// recursion - memoization

function solution(n,r){
    let answer;
    let dy = Array.from(Array(35), () => Array(35).fill(0));
    function recursion(n, r){
        if(dy[n][r] > 0) return dy[n][r];
        if(n === r || r === 0) return 1;
        else {
           return dy[n][r] = recursion(n-1, r-1)+recursion(n-1, r);
        }
    }
    answer = recursion(n,r);
    console.log(answer);
}

console.log(solution(4, 2))


5C3의 관점에서 처음에 아무 숫자를 지정하고, 그 숫자가 포함되는지, 포함되지 않는지 나눈다.
예를 들어 5를 지정했다면, 5가 포함되는지 포함되지 않는지로 나눌 수 있다.
- 5가 포함된 경우는 5를 포함하고 나머지 4개 중에서 2개를 뽑는 경우
- 5가 포함되지 않은 경우는 나머지 4개 중에서 3개를 뽑는 경우

                                5C3
                4C2                             4C3
        3C1             3C2
    2C0     2C1
          1C0  1C1