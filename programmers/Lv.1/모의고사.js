// for문 반복 줄이기
function solution(answers) {
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let cnt1 = 0;
  let cnt2 = 0;
  let cnt3 = 0;

  let result = [];

  for (let i = 0; i < answers.length; i++) {
    if (first[i % 5] === answers[i]) cnt1++;
    if (second[i % 8] === answers[i]) cnt2++;
    if (third[i % 10] === answers[i]) cnt3++;
  }

  let max = Math.max(cnt1, cnt2, cnt3);

  if (cnt1 === max) result.push(1);
  if (cnt2 === max) result.push(2);
  if (cnt3 === max) result.push(3);

  return result;
}

// 처음 제출한 풀이에서 if 조건문 처리 수정
// function solution(answers) {
//   let first = [1, 2, 3, 4, 5];
//   let second = [2, 1, 2, 3, 2, 4, 2, 5];
//   let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   let cnt1 = 0;
//   let cnt2 = 0;
//   let cnt3 = 0;

//   let result = [];

//   for (let i = 0; i < answers.length; i++) {
//     if (i > first.length - 1) {
//       if (answers[i] === first[i % first.length]) cnt1 += 1;
//       continue;
//     }
//     if (first[i] === answers[i]) cnt1 += 1;
//   }

//   for (let i = 0; i < answers.length; i++) {
//     if (i > second.length - 1) {
//       if (answers[i] === second[i % second.length]) cnt2 += 1;
//       continue;
//     }
//     if (second[i] === answers[i]) cnt2 += 1;
//   }

//   for (let i = 0; i < answers.length; i++) {
//     if (i > third.length - 1) {
//       if (answers[i] === third[i % third.length]) cnt3 += 1;
//       continue;
//     }
//     if (third[i] === answers[i]) cnt3 += 1;
//   }

//   let max = Math.max(cnt1, cnt2, cnt3);

//   if (cnt1 === max) result.push(1);
//   if (cnt2 === max) result.push(2);
//   if (cnt3 === max) result.push(3);

//   return result;
// }

// 처음으로 제출한 풀이
// function solution(answers) {
//   let first = [1, 2, 3, 4, 5];
//   let second = [2, 1, 2, 3, 2, 4, 2, 5];
//   let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   let cnt1 = 0;
//   let cnt2 = 0;
//   let cnt3 = 0;

//   for (let i = 0; i < answers.length; i++) {
//     if (i > first.length - 1) {
//       if (answers[i] === first[i % first.length]) cnt1 += 1;
//       continue;
//     }
//     if (first[i] === answers[i]) cnt1 += 1;
//   }

//   for (let i = 0; i < answers.length; i++) {
//     if (i > second.length - 1) {
//       if (answers[i] === second[i % second.length]) cnt2 += 1;
//       continue;
//     }
//     if (second[i] === answers[i]) cnt2 += 1;
//   }

//   for (let i = 0; i < answers.length; i++) {
//     if (i > third.length - 1) {
//       if (answers[i] === third[i % third.length]) cnt3 += 1;
//       continue;
//     }
//     if (third[i] === answers[i]) cnt3 += 1;
//   }

//   if(cnt1 > cnt2 && cnt1 > cnt3) return [1];
//   if(cnt2 > cnt1 && cnt2 > cnt3) return [2];
//   if(cnt3 > cnt1 && cnt3 > cnt2) return [3];
//   if(cnt1 === cnt2 && cnt1 > cnt3) return [1,2];
//   if(cnt1 === cnt3 && cnt1 > cnt2) return [1,3];
//   if(cnt2 === cnt3 && cnt2 > cnt1) return [2,3];
//   if(cnt1 === cnt2 && cnt2 === cnt3) return [1,2,3];

// }

console.log(solution([1, 3, 2, 4, 2]));
