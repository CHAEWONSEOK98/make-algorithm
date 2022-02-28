function solution(str) {
  const answer = [];
  const result = [...str];
  const newResult = result.map((item) => Number(item));

  for (let i = 0; i < newResult.length; i++) {
    if (Number.isNaN(newResult[i]) === false) answer.push(newResult[i]);
  }
  if (answer[0] === 0) answer.splice(0, 1);
  return answer.join("");
}

const str = "g0en2T0s8eSoft";
console.log(solution(str));
