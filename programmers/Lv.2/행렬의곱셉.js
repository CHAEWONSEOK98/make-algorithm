// 아래 코드에서
// for (let j = 0; j < arr2.length; j++) 이 조건에서
// for (let j = 0; j < arr2[0].length; j++) 조건 하나만 바꿔서 성공
// 전체 길이가 아닌 특정 행, 열의 길이를 기준으로 반복

// 행렬의 곱 방식
// [232 x 523] [232 x 441] [232 x 311]
// [424 x 523] [424 x 441] [424 x 311]
// [314 x 523] [314 x 441] [314 x 311]

function solution(arr1, arr2) {
  let cnt = 0;
  let newArr = [];
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let z = 0; z < arr2.length; z++) {
        cnt = cnt + arr1[i][z] * arr2[z][j];
      }
      newArr.push(cnt);
      cnt = 0;
    }
    result.push(newArr);
    newArr = [];
  }
  return result;
}

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);

// 예시 성공, 테스트 케이스 전부 실패
function solution(arr1, arr2) {
  let cnt = 0;
  let newArr = [];
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let z = 0; z < arr2.length; z++) {
        cnt = cnt + arr1[i][z] * arr2[z][j];
      }
      newArr.push(cnt);
      cnt = 0;
    }
    result.push(newArr);
    newArr = [];
  }
  return result;
}

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
