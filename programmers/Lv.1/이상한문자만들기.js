'try hello world' > 'TrY HeLlO WoRlD';

>> 문제 잘못 읽은 코드...
// function solution(s) {
//   let result = s[0].toUpperCase();
//   for (let i = 1; i < s.length; i++) {
//     if (i % 2 === 0) {
//       result += s[i].toUpperCase();
//     } else result += s[i].toLowerCase();
//   }
//   return result;
// }

// console.log(solution('try hello world'));


이렇게 풀어서 테스트 케이스는 통과했지만 성능 측면에서 이중반복문을 사용하는건 지양해야한다.
function solution(s) {
    let change = s.split(" ");
    let result ='';
    for(let i = 0; i<change.length; i++){
        for(let j =0; j<change[i].length; j++){
            if(j % 2 === 0){
                result += change[i][j].toUpperCase();
            }
            else result += change[i][j].toLowerCase();
        }
        result += ' ';
    }
    let answer = result.slice(0, -1);
    return answer;
  }
  
  console.log(solution('try hello world'));
