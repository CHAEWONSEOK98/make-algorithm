strings.sort((a, b) => a - b); //오름차순 정렬
strings.sort((a, b) => a[n] - b[n]); //n번째 문자열 오름차순 정렬
strings.sort(function (a, b) {
  if (a[n] == b[n]) {
    a.localeCompare(b); // 사전 순으로 정렬 - localeCompare: 사전 순 정렬 메소드
  } else {
    a[n].localeCompare(b[n]);
  }
});

function solution(strings, n) {
  let result = strings.sort((a, b) =>
    a[n] == b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
  return result;
}
console.log(solution(['sun', 'bed', 'car'], 1));
