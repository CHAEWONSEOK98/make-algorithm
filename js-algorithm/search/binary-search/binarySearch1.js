//Binary Search : 데이터가 분류되어 있어야 함.
//key point : dividing and conquering
// BIG O => O(log n) or O(1)

//think!
function binarySearch1(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch1([1, 2, 3, 4, 5], 2));

//  [2,5,6,9,13,15,28,30], 1
//   s     m           e
//   s m e
//  sem
// e s

//[2,5,6,9,13,15,28,30], 50
// s     m           e
//         s  m      e
//               sm  e
//                  sem
//                      s
