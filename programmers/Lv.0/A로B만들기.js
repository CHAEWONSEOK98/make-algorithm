anagram문제랑 비슷?
function solution(str1, str2) {
    let lookup = {};

    for(let i = 0; i< str1.length; i++){
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i<str2.length; i++){
        let letter = str2[i];
        if(!lookup[letter]) {
            return 0
        } else{
            lookup[letter] -= 1;
        }
    }
    return 1;
}

console.log(solution('olleh', 'hello'));

다른 풀이
return str1.split('').sort().join('') === str2.split('').sort().join('') ? 1 : 0;