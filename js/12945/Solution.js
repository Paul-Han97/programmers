/**
 * 피보나치 수  https://school.programmers.co.kr/learn/courses/30/lessons/12945
 * @param {Number} n
 * @returns
 */
function solution(n) {
  let left = 0n;
  let right = 1n;
  let next = 0n;

  for(let i = 0; i < n - 1; i++) {
    next = left + right;
    left = right;
    right = next;
  }

  return next % 1234567n;
}

let count = 1;

console.time("mySolution")
execute(100000, 2);
console.timeEnd("mySolution")
execute(5, 5);

function execute(n, answer) {
  console.log(`실행 ${count++} >>\t${solution(n)}\t${answer}`);
}
