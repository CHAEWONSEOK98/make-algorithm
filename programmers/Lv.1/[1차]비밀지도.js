// 2018 KAKAO BLIND RECRUITMENT

// let a = 5;
// let b = a.toString(2); '101'
// 위의 조건을 활용?

// padStart() 내장함수 사용.

function solution(n, arr1, arr2) {
  let arr = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    let binaryNumber1 = arr1[i].toString(2);
    let binaryNumber2 = arr2[i].toString(2);

    if (binaryNumber1.length !== n) {
      binaryNumber1 = binaryNumber1.toString(2).padStart(n, '0');
    }

    if (binaryNumber2.length !== n) {
      binaryNumber2 = binaryNumber2.toString(2).padStart(n, '0');
    }

    for (let j = 0; j < n; j++) {
      if (binaryNumber1[j] === '1' || binaryNumber2[j] === '1') arr[i][j] = '#';
      if (binaryNumber1[j] === '0' && binaryNumber2[j] === '0') arr[i][j] = ' ';
    }
    arr[i] = arr[i].join('');
  }

  return arr;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

// 런타임에러
// function solution(n, arr1, arr2) {
//   let arr = Array.from({ length: n }, () => []);

//   for (let i = 0; i < n; i++) {
//     let binaryNumber1 = arr1[i].toString(2);
//     let binaryNumber2 = arr2[i].toString(2);

//     if (binaryNumber1.length !== 5) {
//       while (binaryNumber1.length !== 5) {
//         binaryNumber1 = '0' + binaryNumber1;
//       }
//     }

//     if (binaryNumber2.length !== 5) {
//       while (binaryNumber2.length !== 5) {
//         binaryNumber2 = '0' + binaryNumber2;
//       }
//     }

//     for (let j = 0; j < n; j++) {
//       if (binaryNumber1[j] === '1' || binaryNumber2[j] === '1') arr[i][j] = '#';
//       if (binaryNumber1[j] === '0' && binaryNumber2[j] === '0') arr[i][j] = ' ';
//     }
//     arr[i] = arr[i].join('');
//   }

//   return arr;
// }

// console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
