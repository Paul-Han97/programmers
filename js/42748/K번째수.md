# K번째수
https://school.programmers.co.kr/learn/courses/30/lessons/42748

## 문제 설명
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한사항
* array의 길이는 1 이상 100 이하입니다.
* array의 각 원소는 1 이상 100 이하입니다.
* commands의 길이는 1 이상 50 이하입니다.
* commands의 각 원소는 길이가 3입니다.

## 입출력 예
|array|commands|return|
|:--|:--|:--|
|[1, 5, 2, 6, 3, 7, 4]|[[2, 5, 3], [4, 4, 1], [1, 7, 3]]|[5, 6, 3]|

## 입출력 예 설명
### 예제 #1
> [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.

> [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.

> [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

## 풀이
1. `commands`의 길이만큼 반복하여 `i, j, k` 추출
2. `Array.prototype.slice()` 메서드로 `temp` 배열 생성
3. `Array.prototype.sort()` 메서드로 오름차순 정렬   
**해당 메서드에서 매개변수를 입력하지 않으면 모든 배열의 요소는 문자열로 변환되어 UTF-16 순서로 정렬되니 주의해야 한다.**


```js
function solution(array, commands) {
  var answer = [];
  for (const command of commands) {
    const i = command[0] - 1;
    const j = command[1]
    const k = command[2] - 1;
    let temp = array.slice(i, j)
                    .sort((a, b) => a - b);
    answer.push(temp[k]);
  }
  return answer;
}
```