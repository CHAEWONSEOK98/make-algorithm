// Hash | Sliding Window | Two Pointers Algorithm

// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성.
// 아나그램 판별시 대소문자가 구분된다.

// 입력설명
// 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄이 T문자열이 입력된다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같다.

// 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}

function solution(s, t) {
  let result = 0;
  let sH = new Map();
  let tH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  let len = t.length - 1; // 값을 비교하기 전 세팅하는 단계
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  let left = 0;
  for (let right = len; right < s.length; right++) {
    if (sH.has(s[right])) sH.set(s[right], sH.get(s[right]) + 1);
    else sH.set(s[right], 1);
    if (compareMaps(sH, tH)) result++;
    sH.set(s[left], sH.get(s[left]) - 1);
    if (sH.get(s[left]) === 0) sH.delete(s[left]);
    left++;
  }
  return result;
}

console.log(solution('bacaAacba', 'abc'));
