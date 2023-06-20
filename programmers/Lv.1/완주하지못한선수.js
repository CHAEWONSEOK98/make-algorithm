// 완주하지 못한 선수

// JavaScript Hash Map 사용하는 문제.

function solution(participant, completion) {
  let result = [];
  let completionHash = new Map();

  for (let x of completion) {
    if (completionHash.has(x)) completionHash.set(x, completionHash.get(x) + 1);
    else completionHash.set(x, 1);
  }

  for (let y of participant) {
    if (completionHash.has(y)) {
      completionHash.set(y, completionHash.get(y) - 1);
      if (completionHash.get(y) === 0) completionHash.delete(y);
    } else {
      result.push(y);
    }
  }
  return result[0];
}

console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);

// function solution(participant, completion) {

//   let participantHash = new Map();

//   for (let x of participant) {
//     if (participantHash.has(x)) participant.set(x, participant.get(x) + 1);
//     else participantHash.set(x, 1);
//   }

//   for (let y of completion) {
//     if (participantHash.has(y)) {
//       participantHash.set(y, participantHash.get(y) - 1);
//       if (participantHash.get(y) === 0) participantHash.delete(y);
//     }
//   }

//   console.log(participantHash);
// }

// console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
