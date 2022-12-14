테스트 케이스 1개 오류. 90%.
function solution(array, n) {
  let arr = array;
  let newArr = []; // [17, 10, 8]

  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.abs(n - arr[i]));
  }
  console.log(newArr);

  let result = newArr.slice().sort((a, b) => a - b);
  let index = newArr.indexOf(Math.min(...result));
  return arr[index];
}

console.log(solution([3, 1, 3], 2)); >> 이런 경우의 테스트 케이스에 오류.

왜냐면 [3,1,3], 2 의 경우 위 코드의 경우 [1,1,1]이런 식이라서 1이 리턴되어야 하는데 3이 리턴됨.

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
통과
function solution(array, n) {
    let arr = array.slice().sort((a, b) => a - b);
    let newArr = []; 
  
    for (let i = 0; i < arr.length; i++) {
      newArr.push(Math.abs(n - arr[i]));
    }
    console.log(newArr);
  
    let result = newArr.slice().sort((a, b) => a - b);
    let index = newArr.indexOf(Math.min(...result));
    return arr[index];
  }
  
  console.log(solution([3, 1, 3], 2));

  이 문제는 생각보다 시간이 오래 걸려서 해결함.
  가장 가까운 수를 찾을 때 주어진 n값에서 각각의 배열 원소 값을 빼는 과정까지는 생각했지만 그 이후가 떠오르지 않았음.
  두 수의 차 값이 제일 작은 수가 가장 가까운 수이기 때문에 주어진 배열을 정렬해준 후
  n - 각각의 배열 값을 뺀 후 이 값들도 정렬한다. 그 후 가장 작은 원소를 가진 인덱스를 찾아서 결과 값을 리턴.