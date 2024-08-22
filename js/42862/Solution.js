/**
 * 체육복   https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * @param {Number} n 전체 학생의 수
 * @param {Array} lost 체육복을 도난당한 학생들의 번호가 담긴 배열
 * @param {Array} reserve 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
 * @returns answer
 */
function solution(n, lost, reserve) {
  let answer = n - lost.length;

  lost.sort();
  reserve.sort();

  for(let i = 0; i < lost.length; i++) {
    for(let j = 0; j < reserve.length; j++) {
      if(lost[i] === reserve[j]) {
        answer++;
        lost[i] = -1;
        reserve[j] = -1;
        break;
      }
    }
  }

  for(let i = 0; i < lost.length; i++) {
    for(let j = 0; j < reserve.length; j++) {
      let allowsRental = Math.abs(lost[i] - reserve[j]) === 1;
      if(allowsRental) {
        answer++;
        lost[i] = -1;
        reserve[j] = -1;
        break;
      }
    }
  }

  return answer;
}

let count = 1;

execute(5, [2, 4], [1, 3, 5]);
execute(5, [2, 4], [3]);
execute(3, [3], [1], 2);

execute(5, [4, 5], [3, 4]);

execute(5, [3, 4], [4, 3]);
execute(5, [1, 2], [2, 3]);

function execute(n, lost, reserve) {
  console.log(`실행 ${count++}\t> > ` + solution(n, lost, reserve));
}
