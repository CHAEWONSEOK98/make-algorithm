function solution(string) {
  const arr = string.split(' ');

  let result = Number(arr[0]);
  arr.forEach((item, index) => {
    if (item === '+') {
      result += Number(arr[index + 1]);
    }
    if (item === '-') {
      result -= Number(arr[index + 1]);
    }
  });
  return result;
}

console.log(solution('3 + 4'));

//eval을 사용하면 좀더 간편하게 풀 수 있음.
