등차, 등비를 판별하여 배열의 마지막 값 이후에 올 숫자를 찾는 문제.

문제의 조건이 무조건 등차수열 혹은 등비수열이기 때문에 두 경우의 조건만 생각한다.

등차, 등비수열 조건문으로 나눈 후 배열의 마지막 값을 length-1로 찾는다.

배열의 마지막 값과 공차 또는 공비를 계산한다.

function solution(common) {
  let check = common;
  if (check[1] / check[0] === check[2] / check[1]) {
    return (check[1] / check[0]) * check[check.length - 1];
  } else {
    return check[1] - check[0] + check[check.length - 1];
  }
}

console.log(solution([1, 2, 3, 4]));
