// 2019 KAKAO BLIND RECRUITMENT

function solution(record) {
  const hash = new Map();
  const res = [];

  record.forEach((e) => {
    const [action, id, nickname] = e.split(" ");

    switch (action) {
      case "Enter":
        res.push([id, "님이 들어왔습니다."]);
        hash.set(id, nickname);
        break;
      case "Leave":
        res.push([id, "님이 나갔습니다."]);
        break;
      case "Change":
        hash.set(id, nickname);
        break;
    }
  });

  return res.map((e) => hash.get(e[0]) + e[1]);
}
