[풀이과정]
- 먼저 인덱스 값을 찾기위해 2차원 배열을 1차원 배열로 만들어준다.
- indexOf() 함수를 사용하여 인덱스 값을 찾는다. 첫 조건문에서 아이디가 있는 경우 미리 선언한 빈 배열에 아무 값이나 넣는다.
- 첫 조건문에 해당하면서 아이디 인덱스 값에 1을 더한 값이 패스워드 인덱스값이어야 로그인이 될 수 있다.
  그런데 앞에서부터 indexOf()함수로 찾으면 아이디는 다르지만 비밀번호가 같은 중복이 있을 수 있으므로
  뒤에서부터 인덱스 값을 찾는 lastIndexOf()함수를 사용한다.
- 마지막 리턴에서는 삼항 연산자를 사용하여 아무 값이나 넣었던 빈배열의 길이가 0이상이면 틀린 비밀번호를, 길이가 0이면 실패를 리턴한다.
 

function solution(id_pw, db) {
  let result = [];
  const newDb = db.flat();
  if (newDb.indexOf(id_pw[0]) !== -1) {
    result.push(1);
    if (newDb.indexOf(id_pw[0]) + 1 === newDb.lastIndexOf(id_pw[1])) {
      return 'login';
    }
  }
  return result.length > 0 ? 'wrong pw' : 'fail';
}

console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ]
  )
);

[다른사람풀이]
map() 함수를 사용하여 푸는 방법으로 map사용법에 대해 다시 한번 생각해볼 수 있었다.
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

