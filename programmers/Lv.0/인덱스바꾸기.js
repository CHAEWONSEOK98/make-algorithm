function solution(my_string, num1, num2) {
  let arr = my_string.split('');
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (i === num1) {
      str = arr[i];
      arr[num1] = arr[num2];
    }
    if (i === num2) {
      arr[num2] = str;
    }
  }
  let result = arr.join('');
  return result;
}

console.log(solution('I love you', 3, 6));
