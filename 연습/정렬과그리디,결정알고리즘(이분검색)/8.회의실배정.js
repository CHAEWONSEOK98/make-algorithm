// 회의실 배정 - 그리디

function solution(meeting) {
  let result = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let endTime = 0;
  for (let x of meeting) {
    if (x[0] >= endTime) {
      result++;
      endTime = x[1];
    }
  }
  return result;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
