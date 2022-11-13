// 정수 num 와 k를 매개변수로 받아 num을 이루는 숫자 중에 k가 있으면 num의
// 그 숫자가 있는 자리수를 return하고 없으면 -1을 return

// 29183, 1 > 3 이런 형식일 때 num값이 숫자로 있으면 순서를 찾을 수 없다고 생각.
// 그래서 우선은 num을 배열로 바꿔서 indexOf을 사용하려고 했음.

function solution(num, k) {
    let answer = String(num).split('');
    // console.log(answer); // ['2', '9', '1', '8', '3']
    for(let i = 0; i<answer.length; i++){
        answer[i] = Number(answer[i]);
    }
    // console.log(answer); // [2,9,1,8,3]
    let order = answer.indexOf(k);
    if(order !== -1) return order + 1;
    else return -1;
  }
  
  console.log(solution(29183, 10));

// 매개변수로 받은 k값은 숫자라서 indexOf를 그대로 사용하면 배열의 값은 문자열이라 -1을 반환.
// 매개변수 k값과 배열의 인덱스를 비교해서 해당 숫자를 indexOf로 찾기 위해 answer 배열의 인덱스 각각의 숫자로 바꿔줌. 

다른 풀이1
num.toString().split('').map((key) => Number(key)).indexOf(k) + 1 || -1

다른 풀이2
let answer = num.toString()
if(answer.includes(k)) {
    return answer.indexOf(k) + 1;
} else{
    return -1;
}
