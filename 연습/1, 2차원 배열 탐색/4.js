function solution(arr) {
  let cnt = 1;
  let option = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) {
      continue;
    }
    if (arr[i] === 1) {
      if (arr[i] === arr[i - 1]) {
        cnt++;
        cnt = cnt + option;
        option++;
      } else if (arr[i] !== arr[i - 1]) {
        cnt++;
        option = 1;
      }
    }
  }
  return cnt;
}

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

/*
연속되면 가산점.
1이 한 번 등장하면 1점.
연속으로 2번 등장하면 2점.
연속으로 3번 등장하면 3점.
가령 1 2 3 번에 각각 1이 있으면 1, 2, 3 으로 총 6점 획득
메인으로 카운트해주는 변수랑 이걸 보조해주는 변수가 필요하다고 생각함.

*/
