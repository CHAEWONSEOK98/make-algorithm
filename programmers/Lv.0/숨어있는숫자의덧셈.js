'aAb1B2cC34oOp' > 37;
'1a2b3c4d123Z' > 133;

function solution(my_string) {
  let reg = my_string.replace(/[^0-9]/g, ',');
  let result = 0;
  let arr = [];
  let numberFilter = '';
  for (key of reg) {
    if (isNaN(key) === true) {
      if (numberFilter !== '') {
        arr.push(numberFilter);
      }
      numberFilter = '';
    } else if (isNaN(key) === false) {
      numberFilter += key;
    }
  }

  if (numberFilter !== '') {
    arr.push(numberFilter);
  }

  for (key of arr) {
    result += Number(key);
  }

  return result;
}

console.log(solution('aAb1B2cC34oOp111'));
