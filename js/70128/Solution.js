/**
 * 내적  https://school.programmers.co.kr/learn/courses/30/lessons/70128
 * @param {Number} a 
 * @param {Number} b 
 * @returns 
 */
function solution(a, b) {
  let answer = 0;
  
  for(let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  
  return answer;
}

let count = 1;

execute([1,2,3,4], [-3,-1,0,2], 3);
execute([-1,0,1], [1,0,-1], -2);

function execute(a, b, answer) {
  console.log(`실행 ${count++} >>\t${solution(a, b)}\t${answer}`);
}
