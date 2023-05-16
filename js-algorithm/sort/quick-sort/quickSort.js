function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
// 3
// [2,1,3,4,8,6,7,5] 이런식으로 정렬될 것이다.
// 이때 왼쪽 오른쪽으로 각각 작은 수 큰 수가 정렬되었다면 그 수들의 순서는 중요하지 않다.
// 가운데 기준이 되는 수의 위치가 중요하다.

// quickSort([4,6,9,1,2,5,3])
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1   6,9,5
//      3     6
//  2,1     5   9
//  1
