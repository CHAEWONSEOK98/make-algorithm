// 조합, 경우의 수 나열

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((element) => [element]);
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1);
    // 나머지에 대해서 조합을 구하는 경우
    const attached = combinations.map((element) => [fixed, ...element]);
    // 돌아온 조합에 때 놓은 (fixed) 값 붙이기
    results.push(...attached);
    // 배열로 모두 push
  });

  return results;
};
console.log(getCombinations([1, 2, 3, 4], 3));

//////////////////////////////////////////////////////////////////////////////

function solution(arr, selectNumber) {
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((element) => [element]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((element) => [fixed, ...element]);
      results.push(...attached);
    });

    return results;
  };
  let end = getCombinations(arr, selectNumber);
  console.log(end);
}

console.log(solution([1, 2, 3, 4], 2));
