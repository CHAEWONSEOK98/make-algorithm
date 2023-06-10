function solution(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) continue;

    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    }

    if (arr[i - 1] === undefined || arr[i - 1] === ' ') {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join('');
}

console.log(solution('3people unFollowed me'));
