/**
 * 점프와 순간 이동 https://school.programmers.co.kr/learn/courses/30/lessons/12980
 * @param {Number} n
 * @returns
 */
function solution(n) {
  let answer = 0;

  while(n > 0) {
    if(n % 2 === 0) {
      n /= 2;
      continue;
    }

    answer += 1;
    n -= 1;
  }

  return answer;
}

let count = 1;

execute(5, 2);
execute(6, 2);
execute(5000, 5);
execute(1_000_000_000, 5);

function execute(n, answer) {
  console.log(`실행 ${count++} >>\t${solution(n)}\t${answer}`);
}
