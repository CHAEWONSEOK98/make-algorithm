// bubble sort
// BIG O => O(n * n)

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// for루프 개선 + Optimized with noSwaps
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps;
    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
      if (noSwaps) break;
    }
  }
  return arr;
}

console.log(bubbleSort([37, 29, 8, 45]));
