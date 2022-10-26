//Linear Search : 데이터가 분류되지 않았을 때 사용.
//findIndex, indexOf, includes
//bigO => O(n)

// other think
function linearSearch1(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}
console.log(linearSearch1([1, 2, 3, 4], 3));

//first think
// function linearSearch1(arr, num) {
//   return arr.indexOf(num);
// }
// console.log(linearSearch1([9,8,7,6,5,4,3,2,1,0], 4));

// second think
// function linearSearch1(arr, num) {
//   let check = 0;
//   for (let key of arr) {
//     if (key === num) {
//       return check;
//     }
//     check += 1;
//   }
//   return -1;
// }
// console.log(linearSearch1([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
