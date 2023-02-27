// 풀이방식
// 주어진 n의 값을 재귀함수를 통해서 3진법으로 바꿔준다.
// 이후 split(), reverse(), join()함수를 각각 사용.
// 3진법을 10진법으로 바꿔주는 결과값은 반복문을 사용하여 구해준다.

function ternaryRecursion(num) {
  if (num == 0 || num == 1 || num == 2) {
    return String(num);
  }

  return ternaryRecursion(Math.floor(num / 3)) + String(num % 3);
}

function solution(n) {
  let ternary = ternaryRecursion(n).split('').reverse().join('');

  let cnt = 0;
  let reverseCnt = ternary.length - 1; //3
  let result = 0;
  for (let i = 0; i < ternary.length - 1; i++) {
    cnt += ternary[i] * 3 ** reverseCnt; // 27, 9, 2 * 3 = 6
    reverseCnt--;
  }
  result = cnt + Number(ternary[ternary.length - 1]);
  return result;
}

console.log(solution(45));

// 다른사람풀이- 단순하고 깔끔함
// const solution = (n) => {
//     return parseInt([...n.toString(3)].reverse().join(""), 3);
// }
