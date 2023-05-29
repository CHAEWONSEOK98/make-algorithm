function solution(chicken) {
  let coupon = chicken;
  let cnt = 0;
  let service = 0;

  // 1081 % 10 // 1
  // 1081 / 10 // 108.1

  while (true) {
    service = Math.floor(coupon / 10); // 108 10 1 1
    coupon = service + (coupon % 10); // 109 19 10 0

    cnt = cnt + service;

    if (coupon < 10) {
      break;
    }
  }
  return cnt;
}

console.log(solution(1081));
