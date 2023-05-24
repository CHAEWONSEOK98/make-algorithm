function solution(my_string) {
  let str = my_string;
  let arr = Array(52).fill(0);

  // charCodeAt의 결과값은 아스키코드값. 여기서 26, 26 나눠서 각각 해당 인덱스에 맞게 설정
  // str.charCodeAt(i) - 64 - 1 에서 -1을 하는 이유는 인덱스값은 1이 더 작기때문.
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97) {
      console.log(str.charCodeAt(i) - 70);
      arr[str.charCodeAt(i) - 70 - 1]++;
    }
    if (str.charCodeAt(i) <= 90) {
      console.log(str.charCodeAt(i) - 64);
      arr[str.charCodeAt(i) - 64 - 1]++;
    }
  }
  return arr;
}

console.log(solution('Programmers'));
