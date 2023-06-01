// 2019 카카오 개발자 겨울 인턴십

[풀이과정]
- Stack에 moves 배열 값을 각각 push, 이전 값과 같을 경우 pop,
    - 원래는 이전 값과 같지 않았는데 어떤 수가 push된 후 이전 값과 같아서 pop하고보니 이전 값과 같아진 경우는 어떤 방식으로 처리할지?
        -> push 하기 전에 stack의 마지막 값과 비교해서 같으면 push 단계를 건너뛰고 pop을 실행.



// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   push(value) {
//     let newNode = new Node(value);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       let temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     return ++this.size;
//   }
//   pop() {
//     if (!this.first) return null;
//     let temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

function solution(board, moves) {
  let stack = [];
  let cnt = 0;
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if(tmp === stack[stack.length-1]){
            stack.pop();
            cnt += 2;
        }
        else stack.push(tmp);
        break;
      }
    }
  });

  return cnt;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1,5,3,5,1,2,1,4]
  )
);

4311324;