6 > 1
10 > 5
4 > 2


n값은 주어지고, 피자조각은 6조각이니까 n명이 똑같은 피자 조각을 먹으려면
최소공배수를 구하면 되겠다는 생각으로 접근함.
그런데 문제는 최소공배수 구하는 방법이 떠오르지 않았음.
앞으로도 최소공배수, 최대공약수를 바탕으로 푸는 문제가 종종 있을 것 같아서 이번기회를
통해 기억해두고자 함.

function solution(n) {
    const gcd = (a, b) => {
        if(b===0) return a; // 나누어지면 a 리턴
        return gcd(b, a % b); // 나누어지지 않으면 b와 a&b를 다시 나눔
    };
    const lcm = (a, b) => (a * b) / gcd(a, b); // 두 수의 곱을 최대공약수로 나눈다
    return lcm(n,6) / 6;
}

console.log(solution(10))


유클리드 호재법을 사용하지않고 푼 다른 풀이


function solution(n) {
    let piece = 6;

    while(true) {
        if(piece % n === 0) break
        piece += 6
    }
    return piece / 6;
}

console.log(solution(10))
