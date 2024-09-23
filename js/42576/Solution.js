/**
 * 완주하지 못한 선수 https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * @param {Array} participant 
 * @param {Array} completion 
 * @returns 
 */
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for(let i = 0; i < participant.length; i++) {
    if(participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

let count = 1;

execute(["leo", "kiki", "eden"],["eden", "kiki"],"leo");
execute(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"],"vinko");
execute(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"],"mislav");
function execute(participant, completion, answer) {
  console.log(`실행 ${count++} >>\t${solution(participant, completion)}\t${answer}`);
}
