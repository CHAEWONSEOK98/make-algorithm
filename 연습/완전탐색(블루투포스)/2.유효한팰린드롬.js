function solution(str) {
  const arr = str.toLowerCase();
  const alpha = /[a-z]/gi;
  const result = arr.match(alpha);
  const newArr = Array.from(result);

  console.log(newArr);

  let i = 0,
    j = 1;
  while (i < newArr.length / 2) {
    if (newArr[i] !== newArr[newArr.length - j]) return "NO";
    i++;
    j++;
  }
  return "YES";
}
const str = "found7,time:study;Yduts;emit,7Dnuof";
console.log(solution(str));

/*
1.대소문자 상관없다고 했으니 우선 다 소문자로 만들어준다.
2.문자열에서 알파벳만 추출.
3.문자열을 배열로 만든 후 탐색.
*/
