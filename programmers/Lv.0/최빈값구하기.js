// [1, 2, 3, 3, 3, 4] > 3
// [1, 1, 2, 2] > -1
// [1] > 1

// function solution(array) {
//     if(array.length === 1) return array[0];
//   let str = array.join('');
//   let ob = {};
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i];
//     ob[letter] ? (ob[letter] += 1) : (ob[letter] = 1);
//   }

//   for(key in ob){
//     result.push([key, ob[key]]);
//   }
//   result.sort(function (a, b) {
//     return b[1] - a[1];
//   });
//   if(result[0][1] === result[1][1]) return -1;
//   else return Number(result[0][0]);
// }

// console.log(solution([1, 1, 2, 2]));

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
테스트 케이스 16개 중 14개 맞고, 2개는 런타임 에러.
function solution(array) {
  if (array.length === 1) return array[0];
  const result = [];
  const counts = array.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, {});
  console.log(counts);

  for (let key in counts) {
    result.push([key, counts[key]]);
  }
  result.sort(function (a, b) {
    return b[1] - a[1];
  });

  return result[0][1] === result[1][1] ? -1 : +result[0][0];
}

console.log(solution([1, 2, 3, 3, 3, 4]));
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
테스트 케이스 16개 중 7개 맞고 나머지 틀림 처리
function solution(array) {
  if (array.length === 1) return array[0];
  const result = [];
  const counts = array.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, {});
  console.log(counts);

  for (let key in counts) {
    result.push(counts[key]);
  }
  console.log(result);
  result.sort(function (a, b) {
    return b - a;
  });
  console.log(result);

  return result[0] === result[1] ? -1 : result[0];
}

console.log(solution([1, 2, 3, 3, 3, 4]));
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
통과
function solution(array) {
  let map = new Map();
    
  // Map 객체 초기화
  for(let i = 0; i <= Math.max(...array); i++){
      map.set(i, 0);    
  }
  
  // array 배열의 원소값과 일치하는 Map 객체의 key를 증가시킨다
  for(let i = 0; i < array.length; i++){
      map.set(array[i], map.get(array[i]) + 1);
  }
  
  // Map 객체의 value만 모아서 배열로 만든다
  let arr = Array.from(map.values());
  
  // 최대값 산출
  let max = Math.max(...arr);
  
  // 최대값이 하나만 있다면 max, 여러 개 중복된다면 -1 출력
  if(arr.indexOf(max) !== arr.lastIndexOf(max)){
      return -1;
  } else {
      return arr.indexOf(max);
  }
}

console.log(solution([1, 2, 3, 3, 3, 4]));