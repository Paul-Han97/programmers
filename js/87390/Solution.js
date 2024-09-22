/**
 * 점프와 순간 이동 https://school.programmers.co.kr/learn/courses/30/lessons/87390
 * @param {Number} n
 * @returns
 */
function solution(n, left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    const item = row <= col ? col + 1 : row + 1;

    answer.push(item);
  }
  return answer;
}

/*
  1, 2, 3, 4, 5,
  2, 2, 3, 4, 5,
  3, 3, 3, 4, 5,
  4, 4, 4, 4, 5,
  5, 5, 5, 5, 5

  1, 2, 3, 4, 5, 6,
  2, 2, 3, 4, 5, 6,
  3, 3, 3, 4, 5, 6,
  4, 4, 4, 4, 5, 6,
  5, 5, 5, 5, 5, 6,
  6, 6, 6, 6, 6, 6
*/

function failSolution(n, left, right) {
  let answer = [];

  // 1번 n행 n열 배열 초기화
  const emptyArr = Array.from(Array(n), () => new Array(n));

  // 2번 i행 i열에 대해 각각의 요소를 i로 채우기
  for (let i = 0; i < emptyArr.length; i++) {
    for (let j = 0; j < emptyArr[i].length; j++) {
      let item = i <= j ? j + 1 : i + 1;
      emptyArr[i][j] = item;
    }
  }

  // 3번 각각의 행을 잘라내어 1차원 배열로 이어서 arr 배열 생성
  const arr = emptyArr.flat(1);
  
  // 4번 arr[left] ~ arr[right]만 남기고 전부 제거
  answer = arr.reduce((acc, item, index) => {
    const allowIndex = index >= left && index <= right;
    if (allowIndex) {
      acc.push(item);
    }
    return acc;
  }, []);

  return answer;
}
let count = 1;

execute(3, 2, 5, [3, 2, 2, 3]);
execute(4, 7, 14, [4, 3, 3, 3, 4, 4, 4, 4]);

function execute(n, left, right, answer) {
  console.log(`실행 ${count++} >>\t${solution(n, left, right)}\t${answer}`);
}
