function solution(m, arr) {
  let result = [];
  let n = arr.length;
  let checkList = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      result.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (checkList[i] === 0) {
          checkList[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          checkList[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return result;
}

console.log(solution(2, [3, 6, 9, 10]));

////////////////////////////////////////////////////////////////////

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1);
    console.log(permutations);
    // 나머지에 대해서 순열을 구한다.
    const attached = permutations.map((el) => [fixed, ...el]);
    //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

console.log(getPermutations([1, 2, 3, 4], 2));

/////////////////////////////////////////////////////////

function solution(arr, selectNumber) {
  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results;
  };
  let end = getPermutations(arr, selectNumber);
  console.log(end);
}
console.log(solution([1, 2, 3, 4], 3));
