// Summer/Winter Coding(~2018)

[풀이과정]
- 가장 작은 수부터 1개씩 더하면서 주어진 예산 값과 비교
- 가장 작은 수부터 차례대로 더하기 위해 배열을 오름차순으로 정렬
- 값을 하나씩 더할때마다 미리 선언해둔 카운트 증가
- 주어진 조건에 따라 카운트 리턴
- 주어진 조건에 걸리지 않은 경우 마지막에 카운트 리턴

// 실수 1
// 배열을 정렬할 때 수의 크기를 고려하지 않고 arr.sort() 작성한 것.
// 오름차순 정렬 시 arr.sort(function(a, b){
//     return a - b;
// })

// 실수 2
// 반복문 안에 작성한 조건문에서 조건이 다 걸린다고 생각하여
// 반목문이 끝난 후 리턴 값을 정하지 않은 것.
// 각 부서에서 신청한 금액보다 예산이 클 경우 예산이 남아서 반복문 안에서의
// 조건에 걸리지않고 그대로 반복문이 끝난다. 이때 리턴 값이 없으면 안된다.
// return cnt

function solution(d, budget) {
  let arr = d;
  let sum = 0;
  let cnt = 0;

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    cnt = cnt + 1;
    if (sum === budget) {
      return cnt;
    }
    if (sum > budget) {
      return cnt - 1;
    }
  }

  return cnt;
}

console.log(solution([1, 100, 11, 9, 3, 4, 2], 300));
