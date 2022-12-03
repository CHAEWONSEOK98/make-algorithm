function solution(slice, n) {
  return n % slice === 0 ? Math.floor(n / slice) : Math.floor(n / slice) + 1;
}

console.log(solution(4, 12));
