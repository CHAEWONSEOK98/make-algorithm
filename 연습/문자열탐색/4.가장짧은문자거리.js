function solution(s, t) {
  const items = s;
  const item = t;
  const result = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) result.push(0);
    else if (items[i + 1] !== item && items[i - 1] !== item) {
      result.push(2);
    } else if (items[i] !== items[i + 1]) {
      result.push(1);
    } else if (items[i] !== items[i - 1]) {
      result.push(1);
    }
  }

  return result.join("");
}
const s = "teachermode";
const t = "e";
console.log(solution(s, t));
