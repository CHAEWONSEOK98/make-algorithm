//배열이 정렬되어 있는 경우 - uniqueValue

function countUniqueValues(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 88, 7]));
