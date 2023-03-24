function solution(quiz) {
  let splitArr = quiz.join().split(',');
  let result = '';
  let arr = [];
  let finish = [];

  for (let i = 0; i < splitArr.length; i++) {
    let eachIndex = splitArr[i].split(' ');
    for (let j = 0; j < eachIndex.length; j++) {
      if (eachIndex[1] === '-') {
        arr.push(Number(eachIndex[0]) - Number(eachIndex[2]));
        arr.push(Number(eachIndex[eachIndex.length - 1]));
      } else if (eachIndex[1] === '+') {
        arr.push(Number(eachIndex[0]) + Number(eachIndex[2]));
        arr.push(Number(eachIndex[eachIndex.length - 1]));
      }
    }

    arr[0] === arr[1] ? finish.push('O') : finish.push('X');
    result = '';
    arr = [];
  }
  return finish;
}

console.log(
  solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'])
);
