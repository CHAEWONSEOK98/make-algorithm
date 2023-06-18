// 이상과 이하가 공존하는 값을 찾아야 하는 문제?
// 문제이해 https://www.ibric.org/myboard/read.php?Board=news&id=270333
// 문제이해 자체가 어려웠던 문제

function solution(citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}

console.log(solution([3, 0, 6, 1, 5]));
