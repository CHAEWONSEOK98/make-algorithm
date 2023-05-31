function solution(t, p) {
  const sectionLength = p.length;
  let compare = [];
  let result;

  for (let i = 0; i < t.length; i++) {
    if (i + sectionLength > t.length) break;
    compare.push(t.slice(i, i + sectionLength));
  }

  result = compare.filter((element) => Number(element) <= Number(p));
  return result.length;
}

console.log(solution('10203', '15'));
