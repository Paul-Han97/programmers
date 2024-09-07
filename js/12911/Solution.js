/**
 * 다음 큰 숫자  https://school.programmers.co.kr/learn/courses/30/lessons/12911
 * @param {Number} n
 * @returns
 */
function solution(n) {
  let binaryCount = getBinaryCount(n);

  let nextBinaryCount = 0;
  while (binaryCount !== nextBinaryCount) {
    n++;
    nextBinaryCount = getBinaryCount(n);
  }

  return n;
}

function getBinaryCount(n) {
  return [...n.toString(2)].map(Number).filter((digit) => digit === 1).length;
}

let count = 1;

execute(78, 83);
execute(15, 23);

function execute(n, answer) {
  console.log(`실행 ${count++} >>\t${solution(n)}\t${answer}`);
}
