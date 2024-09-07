/**
 * 폰켓몬  https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * @param {Array} nums 폰켓몬의 종류 번호가 담긴 배열
 * @returns
 */
function solution(nums) {
  let numSet = nums.reduce((acc, el) => {
    return acc.add(el);
  }, new Set());

  let length = nums.length / 2;
  let size = numSet.size;

  if (size >= length) {
    return length;
  }

  return size;
}

let count = 1;

execute([3, 1, 2, 3], 2);
execute([3, 3, 3, 2, 2, 4], 3);
execute([3, 3, 3, 2, 2, 2], 2);

function execute(nums, answer) {
  console.log(`실행 ${count++} >>\t${solution(nums)}\t${answer}`);
}
