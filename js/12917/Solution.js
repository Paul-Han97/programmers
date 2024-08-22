/**
 * 문자열 내림차순으로 배치하기 https://school.programmers.co.kr/learn/courses/30/lessons/12917
 * @param {String} s
 * @returns
 */
function solution(s) {
  var answer = "";

  function isUpper(char) {
    return (
      char.charCodeAt() >= "A".charCodeAt() &&
      char.charCodeAt() <= "Z".charCodeAt()
    );
  }
  
  let upper = "";
  let lower = "";
  for(const char of s){
    if(isUpper(char)){
      upper += char;
    } else {
      lower += char;
    }
  }

  answer += lower.split('').sort().reverse().join('');
  answer += upper.split('').sort().reverse().join('');
  
  return answer;
}

let count = 1;

execute("ASZSbcdefg", "gfedcbZ");

function execute(s, answer) {
  console.log(`실행 ${count++}\t> ${solution(s)}\t< ${answer}`);
}

// 입력값 〉 [10, 2], [[1, 2, 1]]
// 기댓값 〉 [2]
