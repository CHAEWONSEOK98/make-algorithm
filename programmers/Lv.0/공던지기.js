[풀이과정]
- k의 값만큼 numbers의 배열을 추가로 만들어서 이어붙인 후 값을 계산 
- slice() 함수로 배열을 복사한 후 push() 함수로 미리 선언해둔 배열에 넣는다.
- arr 배열은 2차원 배열로 나타난다. flat() 함수를 사용하여 2차원 배열을 1차원으로 만든다.
- 시작은 무조건 인덱스0부터 시작하므로 k값에서 1을 뺀 후 한 칸씩 건너는 것을 생각해서 계산한다. 
function solution(numbers, k) {
  let arr = [];

  for (let i = 0; i < k; i++) {
    let copy = numbers.slice();
    arr.push(copy);
  }

  let newArr = arr.flat();
  return newArr[2 * (k - 1)];

}

console.log(solution([1, 2, 3, 4, 5, 6], 5));