[풀이과정]
주어진 배열에서 0번째, 1번째, 2번째 인덱스가 각각 가로, 세로, 높이니까
주어진 n값으로 각각 나눠준다. 이때 소수점 자리가 생기면 안되므로 Math.floor() 내장함수 이용.
나눠서 나온 값을 각각 곱해주면 box에 들어가는 정육면체의 개수가된다.

function solution(box, n) {
    const width = Math.floor(box[0] / n);
    const depth = Math.floor(box[1] / n);
    const height = Math.floor(box[2] / n);
    return  width * depth * height;
}

console.log(solution([10, 8, 6], 3))