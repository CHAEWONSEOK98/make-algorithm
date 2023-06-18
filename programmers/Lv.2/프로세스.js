// location으로 지정해준 처음의 값을 우선순위에 따라 나열한 후에도 확인할 수 있어야함.
// 만약에 같은 숫자가 있다면 구분하는 기준이 될 수 있는 무언가?

// 뽑으려는 숫자가 처음에 어디에 위치해 있는지부터 확인해야함.
// 확인이 되었다면, 언제쯤 shift()로 빠져나와서 result로 푸쉬되는지

// 위치를 파악하는 로직이 제일 어려웠다.
// 먼저 위치를 파악하기 위해 인덱스를 담은 orderList 배열을 선언 ,할당한다.
// 큐가 원형으로 앞에서 나오고 뒤로 들어간다고 생각하고, 0번 째 인덱스가
// max가 아닌경우에는 queue 배열과 orderlist배열 모두 shift와 push 반복
// 0번째 인덱스가 가장 큰 경우 큐에서 제거해줘야 하는데
// 제거할 때 queue배열에서 한번, orderList에서 한번
// orderList에서 제거할 때 그 값이 주어진 location과 같다면 그 cnt값 반환.

function solution(priorities, location) {
  let queue = priorities;
  let orderList = [];
  //   let result = [];
  let change;
  let cnt = 0;

  for (let i = 0; i < queue.length; i++) {
    orderList.push(i);
  }

  while (queue.length !== 0) {
    let max = Math.max(...queue);
    if (queue[0] !== max) {
      change = queue.shift();
      queue.push(change);

      orderList.push(orderList.shift());
    } else {
      cnt++;
      change = queue.shift();
      //   result.push(change);
      if (orderList.shift() === location) return cnt;
      console.log(orderList);
    }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
