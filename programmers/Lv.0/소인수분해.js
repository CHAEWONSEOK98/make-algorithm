[풀이과정]
- 주어진 n까지의 각각의 인덱스 값이 채워진 배열을 만듬.
- n까지의 수 중에서 소수만 찾고, filter() 함수를 이용하여 새 배열을 만듬.
- n값을 소수로 나눴을 때 0이 되는 값만 만들어둔 빈 배열에 push().

function solution(n) {
  let result = [];
  let arr = Array(n + 1) // 0 ~ n
    .fill()
    .map((e, i) => i);
  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  let newArr = arr.filter((element) => element !== 0);


  for (let i = 1; i < newArr.length; i++) {
    if (n % newArr[i] === 0) result.push(newArr[i]);
  }
  return result;
}

console.log(solution(420));
