function solution(food) {
  let arr = [];

  for (let i = 1; i < food.length; i++) {
    if (food[i] < 2) continue;
    if (food[i] % 2 !== 0) {
      food[i] = food[i] - 1;
    }
    for (let j = 0; j < food[i] / 2; j++) {
      arr.push(i);
    }
  }

  let reverseArr = arr.slice().reverse();
  let result = [...arr, 0, ...reverseArr];
  return result.join('');
}

console.log(solution([1, 7, 1, 2]));
