/**
 * 바탕화면 정리 https://school.programmers.co.kr/learn/courses/30/lessons/161990
 * @param {Array} wallpaper
 * @returns
 */
function solution(wallpaper) {
  let answer = [];

  const FILE = "#";
  
  let minX = Number.MAX_VALUE;
  let minY = Number.MAX_VALUE;
  let maxX = 0
  let maxY = 0

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] !== FILE) {
        continue;
      }

      if(minX > i) {
        minX = i;
      }
      
      if(minY > j) {
        minY = j;
      }
      
      if(maxX < i) {
        maxX = i;
      }
      
      if(maxY < j) {
        maxY = j;
      }
    }
  }

  answer.push(minX, minY, maxX + 1, maxY + 1);
  return answer;
}

let count = 1;

// execute([".#...", "..#..", "...#."], [0, 1, 3, 4]);
// execute(
//   ["..........", ".....#....", "......##..", "...##.....", "....#....."],
//   [1, 3, 5, 8]
// );
// execute(
//   [
//     ".##...##.",
//     "#..#.#..#",
//     "#...#...#",
//     ".#.....#.",
//     "..#...#..",
//     "...#.#...",
//     "....#....",
//   ],
//   [0, 0, 7, 9]
// );
execute(["..", "#."], [1, 0, 2, 1]);

function execute(wallpaper, answer) {
  console.log(`실행 ${count++} >>\t${solution(wallpaper)}\t${answer}`);
}
