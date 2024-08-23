/**
 * 크레인 인형뽑기 게임 https://school.programmers.co.kr/learn/courses/30/lessons/64061
 * @param {Array} board
 * @param {Array} moves
 * @returns answer
 */
function solution(board, moves) {
  var answer = 0;

  let result = [];
  let boardStack = new Array(board[0].length);

  for (let i = 0; i < boardStack.length; i++) {
    boardStack[i] = [];
  }

  for (let x = board.length - 1; x >= 0; x--) {
    for (let y = 0; y < board[x].length; y++) {
      let boardDoll = board[x][y];
      if (boardDoll !== 0) {
        boardStack[y].push(board[x][y]);
      }
    }
  }

  for (const move of moves) {
    let boardDoll = boardStack[move - 1].pop();
    if(boardDoll === undefined){
      continue;
    }

    result.push(boardDoll);

    let isSameDoll =
      result.length >= 2 &&
      result[result.length - 1] === result[result.length - 2];
    if (isSameDoll) {
      result.pop();
      result.pop();
      answer += 2;
    }
  }
  return answer;
}

let count = 1;

execute(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4],
  4
);

function execute(board, moves, answer) {
  console.log(`실행 ${count++}\t> ${solution(board, moves)}\t< ${answer}`);
}
