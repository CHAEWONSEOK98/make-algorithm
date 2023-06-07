[풀이과정]
- photo 배열을 1차원 배열로 만든다.
- photo 배열의 크기만큼 반복.
- name의 배열 크기를 기준으로 구간을 나눠서 합한 점수 값을 배열에 push
- 반복문 안에서 name에 따른 조건설정

처음에는 위와 같은 방법으로 문제를 풀어나가려고 했지만,

구간을 나눠서 합한 점수 값을 배열에 넣는 과정보다 2중 반복문을 사용하는 방법이 간결하다고
생각되어 방향을 바꿈.

function solution(name, yearning, photo) {
    let result = [];
    let cnt = 0;

    for(let i = 0; i < photo.length; i++){
        for(let j = 0; j < photo[i].length; j++){
            if(name.includes(photo[i][j])) {
                let order = name.indexOf(photo[i][j]);
                cnt = cnt + yearning[order];
            }
        }
        result.push(cnt);
        cnt = 0;
    }
    return result;
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);