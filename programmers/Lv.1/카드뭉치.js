// [풀이과정]
// - goal 배열의 길이만큼 반복문 실행
// - goal의 원소는 cards1 또는 cards2에 포함되어있는 조건
// - 현재 i값이 cards1 과 cards2 어디에 있는지 확인 후 인덱스 값 구하기
// - 이전에 카드를 사용하였다면 사용한 자리에 '$'를 채움.
// - 현재 i 값에서 따온 order의 인덱스 값에서 1을 뺀 값이 '$'이 아니고 undefined도 아니라면
//     카드를 사용하지 않고 건너뛰었다는 근거가 되므로 'No' 반환.
// - for문을 올바르게 빠져나왔다면 'Yes' 반환.

function solution(cards1, cards2, goal) {
  let result = [];

  for (let i = 0; i < goal.length; i++) {
    if (cards1.includes(goal[i])) {
      let firstOrder = cards1.indexOf(goal[i]);
      if (
        cards1[firstOrder - 1] !== '$' &&
        cards1[firstOrder - 1] !== undefined
      ) {
        return 'No';
      }
      result.push(cards1[firstOrder]);
      cards1.splice(firstOrder, 1, '$');
    } else {
      let secondOrder = cards2.indexOf(goal[i]);
      if (
        cards2[secondOrder - 1] !== '$' &&
        cards2[secondOrder - 1] !== undefined
      ) {
        return 'No';
      }

      result.push(cards2[secondOrder]);
      cards2.splice(secondOrder, 1, '$');
    }
  }
  return 'Yes';
}

console.log(
  solution(
    ['i', 'water', 'drink'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
);
