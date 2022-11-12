문자열을 받아서 길이가 4 또는 6 아닌 경우 조건문 사용하여 false 리턴
그리고 반복문을 사용하여 type이 number가 아닌 경우 false 리턴
반목문에서 성공적으로 빠져나오는 경우 true를 리턴.

function solution(s) {
  if(s.length !== 4 || s.length !== 6) false;
    let answer = s;
    for(key of answer) {
        if(typeof(key) !== 'number') return false;
    }
    return;
  }
  
  console.log(solution('a234'));
  
  이 경우 'a234'의 경우는 통과하지만 '1234'의 경우는 통과하지 못함.


  // == 값까지만 비교, === 값과 자료형 모두 비교

  function solution(s) {
    return (s.length === 4 || s.length === 6) && s == parseInt(s)
  }
  
  console.log(solution('1a34'));