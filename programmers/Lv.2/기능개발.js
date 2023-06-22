// stack, queue 섹션 문제
// stack, queue 자료구조를 사용해서 푸는 방법이 떠오르지 않음
// 우선은 stack, queue 자료구조가 아닌 다른 방법으로 구현했을 때 통과되었으니
// 다음에 다시 stack, queue 자료구조로 풀어볼 것

function solution(progresses, speeds) {
  let result = [];
  let cnt = 0;
  while (progresses.length !== 0) {
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) progresses[i] += speeds[i];
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }

    if (cnt !== 0) {
      result.push(cnt);
      cnt = 0;
    }
  }
  return result;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
