// 소수: 1과 해당 값으로만 나눠지는 수.

[풀이과정]
- 서로다른 3개를 뽑는 경우의 수를 구한다 > 조합
- 조합의 경우의 수가 담긴 배열을 순회
- 합(sum)을 reduce를 통해 구한다.
- 소수의 조건을 생각하여 2부터 해당 값보다 1 작은 값까지 반복문을 통해 소수인지 아닌지 판단한다.
- 소수이면 result에 플러스

결국엔 조합의 경우의 수가 담긴 배열을 구현하는 과정이 제일 중요한 것 같다.

function solution(nums) {
  let arr = nums;
  let selectNumber = 3;
  let cnt = 0;
  let result = 0;

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

  for (let i = 0; i < end.length; i++) {
    let sum = end[i].reduce((acc, cur) => acc + cur, 0);
    for (let i = 2; i < sum; i++) {
      if (sum % i === 0) cnt++;
    }
    if (cnt === 0) result++;
    cnt = 0;
  }
  console.log(result);
}
console.log(solution([1, 2, 7, 6, 4]));
