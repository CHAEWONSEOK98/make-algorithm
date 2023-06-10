function solution(s) {
  let binary = s;
  let numberToBinary = 0;
  let change = 0;
  let remove = 0;

  while (true) {
    change++;
    binary.split('').forEach((currentValue) => {
      if (currentValue === '0') remove += 1;
    });
    binary = binary.match(/1/g);
    numberToBinary = binary.length;
    if (numberToBinary === 1) break;
    binary = numberToBinary.toString(2);
  }
  return [change, remove];
}

console.log(solution('1111111'));
