/**
 * K번째수 https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * @param {Array} array
 * @param {Array} commands i, j, k
 * @returns result
 */
function solution(array, commands) {
  var answer = [];
  for (const command of commands) {
    const i = command[0] - 1;
    const j = command[1]
    const k = command[2] - 1;
    let temp = array.slice(i, j)
                    .sort((a, b) => a - b);
    answer.push(temp[k]);
  }
  return answer;
}

let count = 1;

// execute(
//   [1, 5, 2, 6, 3, 7, 4],
//   [
//     [2, 5, 3],
//     [4, 4, 1],
//     [1, 7, 3],
//   ],
//   [5, 6, 3]
// );

function execute(array, commands, answer) {
  console.log(`실행 ${count++}\t> ${solution(array, commands)}\t< ${answer}`);
}

// 입력값 〉 [10, 2], [[1, 2, 1]]
// 기댓값 〉 [2]

