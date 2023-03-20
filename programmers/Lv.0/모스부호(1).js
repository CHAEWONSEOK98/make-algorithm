[풀이과정]
- 주어진 letter와 morse 객체를 비교하여 일치, 불일치를 판별할 수 있는 방법을 생각함.
// 이중 반복문 사용을 피하고자 했는데 당장 생각나는 비교수단이 이중 반복문.
- 인덱스값과 객체의 key값을 비교하여 일치, 불일치를 판별
- 인덱스값과 객체의 key값이 일치하면 객체의 value를 각각 더해준다.

function solution(letter) {
  const morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
  };
  const arr = letter.split(' ');
  let sum = '';

  for (let i = 0; i < arr.length; i++) {
    for (key in morse) {
      if (key === arr[i]) sum += morse[key];
    }
  }
}

console.log(solution('.... . .-.. .-.. ---'));

[다른풀이]

for (let i = 0; i < arr.length; i++) {
    for (key in morse) {
      if (key === arr[i]) sum += morse[key];
    }
}

위와 같은 이중 반복문 구문을 아래와 같이 바꿀 수 있다.

for(let i = 0; i < arr.length; i++){
    sum += morse[arr[i]];
}