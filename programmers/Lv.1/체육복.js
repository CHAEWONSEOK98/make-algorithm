// 탐욕법 - Greedy

// 여벌 체육복이 있는 학생이 도난 당한 경우까지 생각해야함.
// 여벌 체육복이 있는 학생이 도난 당한 경우, 빌려주지 못하므로 여벌 체육복이 없다고 생각.
// lost, reserve 각각의 입장에서 못 빌려주고, 못 빌리는 경우를 제외하고 시작.
// 번호의 경우의 수를 생각해서 정렬

function solution(n, lost, reserve) {
  let lostStudent = lost.filter((value) => !reserve.includes(value)).sort();
  let reserveStudent = reserve.filter((value) => !lost.includes(value)).sort();

  for (let i = 0; i < reserveStudent.length; i++) {
    if (lostStudent.includes(reserveStudent[i] - 1)) {
      lostStudent = lostStudent.filter(
        (value) => value !== reserveStudent[i] - 1
      );
    } else if (lostStudent.includes(reserveStudent[i] + 1)) {
      lostStudent = lostStudent.filter(
        (value) => value !== reserveStudent[i] + 1
      );
    }
  }
  return n - lostStudent.length;
}

console.log(solution(3, [3, 12, 15, 5, 4, 2, 3], [1, 12, 15, 2, 3, 8]));

// 60% 성공한 코드. 나머지는 왜 통과가 안되는지 의문인 상황
function solution(n, lost, reserve) {
  let cnt = 0;
  for (let i = 0; i < lost.length; i++) {
    if (lost.length === 0) break;
    else if (reserve.includes(lost[i] - 1)) {
      lost.splice(i, 1, 'q');
      let target = lost[i] - 1;
      let remove = reserve.indexOf(target);
      reserve.splice(remove, 1);
      continue;
    } else if (reserve.includes(lost[i] + 1)) {
      lost.splice(i, 1, 'q');
      let target = lost[i] + 1;
      let remove = reserve.indexOf(target);
      reserve.splice(remove, 1);
      continue;
    } else {
      cnt++;
    }
  }
  return n - cnt;
}

console.log(solution(3, [3], [1]));
