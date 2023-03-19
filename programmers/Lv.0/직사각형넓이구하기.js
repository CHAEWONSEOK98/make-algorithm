[풀이과정]
- 주어진 2차원 배열에서 무작위로 고정하여 비교할 배열을 뽑는다. -> dots[0]
- 고정하여 비교할 배열을 뽑고, 그 뽑힌 배열이 비교군의 대상으로 들어가 있으면 안되기 때문에 filter()
- 고정배열의 x, y값과 같은 배열을 찾는다.
- 선분의 길이를 구해준다. 이때 선분의 길이는 음수일 수 없으므로 절대값을 취한다.
- 가로, 세로 길이를 구한 후 곱하면 결과값이다.

function solution(dots) {
  const fixCoordinate = dots[0];
  const filterArr = dots.filter(element => element !== fixCoordinate);

  let w = 0;
  let h = 0;
  let result = 0;
  for (let i = 0; i < filterArr.length; i++) {
    if (fixCoordinate[0] === filterArr[i][0]) w = filterArr[i];
    if (fixCoordinate[1] === filterArr[i][1]) h = filterArr[i];
  }
  result = Math.abs((fixCoordinate[0]-w[0]) + (fixCoordinate[1]-w[1])) * Math.abs((fixCoordinate[0] - h[0]) + (fixCoordinate[1] - h[1]));
  return result;
}

console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
