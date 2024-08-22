/**
 * 두 개 뽑아서 더하기  https://school.programmers.co.kr/learn/courses/30/lessons/68644
 * @param {Array} numbers 정수 배열
 * @returns answer
 */
function solution(numbers) {
    var answer = [];
    numbers.sort((a, b) => a - b);
    let numberSet = new Set();
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            numberSet.add(numbers[i] + numbers[j]);
        }
    }
    answer = Array.from(numberSet).sort((a, b) => a - b);
    return answer;
}
  
let count = 1;

execute([2,1,3,4,1], [2,3,4,5,6,7]);
execute([5,0,2,7], [2,5,7,9,12]);
execute([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
execute([1, 55, 56]);
  
function execute(numbers, answer) {
    console.log(`실행 ${count++}\t> ${solution(numbers)}\t< ${answer}`);
}
  