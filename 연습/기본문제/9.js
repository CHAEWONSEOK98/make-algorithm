// A를 #으로
/*대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 
프로그램*/

function solution(str) {
  const answer = str;
  const arr = [];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "A") {
      arr.push("#");
      continue;
    }
    arr.push(answer[i]);
  }
  return arr.join("");
}

const str = String("BANANA");
console.log(solution(str));

/*
function solution(s) {
  let answer ="";
  for(let item of s){
    if(item === 'A') answer += '#';
    else answer += item;
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));
*/

/*
function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, '#');
  return answer;
}

let str = "BANANA";
console.log(solution(str));
*/
