function solution(str) {
  let arr = Array.from(str);
  let result = [];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else if (arr[i] !== arr[i + 1]) {
      if (count === 1) {
        result.push(arr[i]);
      } else if (count !== 1) {
        result.push(arr[i]);
        result.push(count);
      }
      count = 1;
    }
  }
  return result.join("");
}
const str = "KKHSSSSSSSE";
console.log(solution(str));

/* 처음에 for문 반복횟수를 배열의 크기로 설정.
for문 안에서 splice 사용으로 배열의 크기가 달라져서 오류남.  */
