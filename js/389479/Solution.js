/**
 * 서버 증설 횟수 https://school.programmers.co.kr/learn/courses/30/lessons/389479
 * @param {Array} wallpaper
 * @returns
 */
function solution(players, m, k) {
  let answer = 0;
  const servers = Array.from({ length: players.length }, () => 0);

  console.log("servers", servers);
  console.log(`시각\t\t게임 이용자의 수\t증설된 서버의 수`);
  for (let i = 0; i < players.length; i++) {
    const user = players[i];
    const server = servers[i];

    const requiredServer = Math.floor(user / m);

    if (server >= requiredServer) continue;

    for (let j = i; j < i + k; j++) {
      if (j > servers.length) break;
      servers[j] += requiredServer - server;
    }

    answer += requiredServer - server;

    console.log(`${i} ~ ${i + 1}\t\t${user}\t\t\t${server}`);
  }

  console.log(servers);

  return answer;
}

let count = 1;

function execute(players, m, k, answer) {
  console.log(`실행 ${count++} >>\t${solution(players, m, k)}\t${answer}`);
}

execute(
  [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5],
  3,
  5,
  7
);
execute(
  [0, 0, 0, 10, 0, 12, 0, 15, 0, 1, 0, 1, 0, 0, 0, 5, 0, 0, 11, 0, 8, 0, 0, 0],
  5,
  1,
  11
);
execute(
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 5, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  1,
  1,
  12
);
