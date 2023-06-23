// 2019 KAKAO BLIND RECRUITMENT

function solution(N, stages) {
  let result = [];
  let cnt = 0;
  let total = stages.length;
  let j = 1;
  while (result.length !== N) {
    for (let i = 0; i < stages.length; i++) {
      if (j === stages[i]) {
        cnt++;
      }
    }

    result.push([j, cnt / total]);
    total = total - cnt;
    cnt = 0;
    j++;
  }

  result.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return b[1] - a[1];
  });
  let end = result.map((currentArr) => currentArr[0]);
  return end;
}

console.log(solution(4, [4, 4, 4, 4, 4]));

// [다른사람풀이]
// 더 간결하다? 깔끔한 느낌?
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
