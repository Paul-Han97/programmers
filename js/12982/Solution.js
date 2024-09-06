/**
 * 예산  https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * @param {Array} d 부서별 신청한 금액
 * @param {Number} budget 예산
 * @returns 물품 지원 가능 부서 수
 */
function solution(d, budget) {
    let answer = 0;
  
    d.sort((a, b) => a - b);
  
    let sum = 0;
    for(let i = 0; i < d.length; i++) {
      sum += d[i];
      answer++;
      if(sum === budget) {
          return answer;
      } else if (sum > budget) {
          return answer - 1;
      }
    }

    // for(const amount of d) {
    //     budget -= amount;
    //     if(budget < 0) {
    //         break;
    //     } else {
    //         answer++;
    //     }
    // }

    return answer;
  }
let count = 1;

execute([1, 3, 2, 5, 4], 9, 3);
execute([2, 2, 3, 3], 10, 4);
execute([1], 1, 1);

function execute(d, budget, answer) {
  console.log(`실행 ${count++} >>\t${solution(d, budget)}\t${answer}`);
}
