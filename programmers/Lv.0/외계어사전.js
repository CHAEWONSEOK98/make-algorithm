[풀이과정]
이중반복문을 사용하여 dic배열과, spell배열을 순회.
dic배열의 인덱스값이 spell의 인덱스값을 포함하는지 includes() 내장 함수를 이용.
포함한다면 미리 선언해둔 빈 배열에 해당 값을 push.
dic의 다음 인덱스로 넘어가기 전 조건문을 사용하여 길이 비교. 길이 조건이 맞으면 1을 리턴.
조건이 다르면 다음 계산을 위해 선언해둔 배열을 다시 빈배열로 초기화.
이중반복문을 다 순회하고 조건문에 해당하는 결과가 없다면 2를 리턴.

function solution(spell, dic) {
    let result = [];
    for(let i =0; i< dic.length; i++){
        for(let j = 0; j<dic[i].length; j++){
            if(dic[i].includes(spell[j])) result.push(spell[j]);
        }
        if(result.length === dic[i].length && result.length === spell.length) return 1;
        result = [];
    }
    return 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]))