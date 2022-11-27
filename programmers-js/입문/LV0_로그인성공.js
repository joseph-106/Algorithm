function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const index = db.findIndex((e) => e[0] === id);

  if (index === -1) return "fail";

  return db[index][1] === pw ? "login" : "wrong pw";
}
