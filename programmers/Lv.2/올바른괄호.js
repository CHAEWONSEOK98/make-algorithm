[스택/큐] - 스택을 사용하여 풀이

[풀이과정]
- 먼저 노드 클래스를 정의한 후 연결리스트로 만든 스택 클래스 정의
- 사실 노드 클래스와 스택 클래스를 정의하는 부분은 배운 부분이라서 그대로 사용하면 되겠지 싶었다. 문제는 날것 그 자체의 스택으로 어떤 방식으로 풀어가는가였다.
- 괄호맞추는 문제에서 왼쪽 괄호는 반드시 오른쪽 괄호를 만나야한다. 주어진 문자열 전체를 통과하는 과정에서 왼쪽 괄호를 만나면 스택에 넣어주고, 오른쪽 괄호를 만나면 스택에서 뺀다.
- 문자열 전체를 통과한 후 스택에 값이 남아있으면 괄호가 맞지 않으므로 false, 값이 남아있지 않다면 true를 반환한다.


[문제점]
- 테스트 케이스는 다 통과했지만 Node와 Stack의 size를 넣을 경우 효율성 테스트 2개 중 1개 실패 > 그래서 size없이 진행

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    return temp.value;
  }
}

function solution(s) {
  if (s[0] === ')') return false;
  let stack = new Stack();
  for (let i of s) {
    if (i === '(') stack.push(i);
    else stack.pop();
  }
  if (stack.first === null) return true;
  else return false;
}

console.log(solution('()()'));
