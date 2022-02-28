function solution(str) {
  const arr = str.toLowerCase();

  let i = 0,
    j = 1;
  while (i < arr.length / 2) {
    if (arr[i] !== arr[arr.length - j]) return "NO";
    i++;
    j++;
  }
  return "YES";
}

const str = "gooG";
console.log(solution(str));
