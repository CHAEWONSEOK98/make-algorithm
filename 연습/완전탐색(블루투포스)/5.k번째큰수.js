function solution(n, k, arr) {
  let answer;
  let store = new Set();
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        store.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  //Set객체는 sort가 안됨. 그래서 배열로 바꿔주고 정렬.
  let q = Array.from(store).sort((a, b) => b - a);
  answer = q[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
