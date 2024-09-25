/**
 * 미로 탈출 https://school.programmers.co.kr/learn/courses/30/lessons/159993
 * @param {Array} maps

 */

function solution(maps) {
  let answer = 0;
  const { start, lever, exit } = findElement(maps);
  const result1 = bfs(maps, start, lever);
  const result2 = bfs(maps, lever, exit);

  if (result1 === -1 || result2 === -1) {
    return -1;
  }

  answer = result1 + result2;
  return answer;
}

function findElement(maps) {
  const START = "S";
  const LEVER = "L";
  const EXIT = "E";

  let start = [];
  let lever = [];
  let exit = [];

  let count = 0;

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === START) {
        count++;
        start = [i, j];
      } else if (maps[i][j] === LEVER) {
        count++;
        lever = [i, j];
      } else if (maps[i][j] === EXIT) {
        count++;
        exit = [i, j];
      }
    }

    if (count === 3) {
      return { start, lever, exit };
    }
  }
}

function bfs(maps, start, end) {
  const X = "X"; // wall

  const visitedMap = Array(maps.length)
    .fill()
    .map(() => {
      return Array(maps[0].length).fill(false);
    });

  const move = [
    [-1, 0], // LEFT
    [0, -1], // BOTTOM
    [1, 0], // RIGHT
    [0, 1], // TOP
  ];

  const [startX, startY] = start;
  const queue = new Queue();

  queue.enqueue(start);
  visitedMap[startX][startY] = true;
  let count = 1;

  while (!queue.isEmpty()) {
    let size = queue.size();
    while (size > 0) {
      console.log(queue.toString());
      const [x, y] = queue.dequeue();
      const [endX, endY] = end;

      for (let j = 0; j < move.length; j++) {
        const [moveX, moveY] = move[j];
        const tempX = x + moveX;
        const tempY = y + moveY;

        const canVisit =
          tempX >= 0 &&
          tempX < maps.length &&
          tempY >= 0 &&
          tempY < maps[0].length &&
          maps[tempX][tempY] !== "X" &&
          visitedMap[tempX][tempY] === false;

        if (canVisit) {
          const isElement = tempX === endX && tempY === endY;

          if (isElement) {
            return count;
          }

          visitedMap[tempX][tempY] = true;
          queue.enqueue([tempX, tempY]);
        }
      }
      size--;
    }
    console.log(visitedMap);
    count++;
    console.log("count", count);
  }

  return -1;
}

class Node {
  data;
  next;
  constructor(data) {
    this.data = data;
  }
}

class Queue {
  #front;
  #rear;
  #size;

  constructor() {
    this.#front = null;
    this.#rear = null;
    this.#size = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.#front) {
      this.#front = node;
      this.#rear = node;
    } else {
      this.#rear.next = node;
      this.#rear = node;
    }
    this.#size++;
  }

  dequeue() {
    let node;
    if (this.#front) {
      node = this.#front.data;
      this.#front = this.#front.next;
    }

    this.#size--;

    return node;
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  toString() {
    let curr = this.#front;
    let result = "[";
    let count = 1;

    if (!curr) {
      result += "]";
      return result;
    }

    while (curr) {
      if (count === this.#size) {
        result += `[${curr.data[0]}, ${curr.data[1]}]]`;
      } else {
        result += `[${curr.data[0]}, ${curr.data[1]}], `;
      }

      curr = curr.next;
      count++;
    }

    return result;
  }
}

/*
  SOOOL
  OOOOO
  OOOOO
  OOOOO
  OOOOE
*/
let count = 1;

// execute(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"], 16);
// execute(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"], -1);
execute(["LOOOS", "OOOOO", "OOOOO", "OOOOO", "OOOOE"], 12);
function execute(maps, answer) {
  console.log(`실행 ${count++} >>\t${solution(maps)}\t${answer}`);
}
