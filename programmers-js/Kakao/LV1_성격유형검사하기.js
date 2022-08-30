function solution(survey, choices) {
  let rt = 0;
  let cf = 0;
  let jm = 0;
  let an = 0;
  let res = "";
  for (let i = 0; i < survey.length; i++) {
    switch (survey[i]) {
      case "RT":
        rt += choices[i] - 4;
        break;
      case "TR":
        rt -= choices[i] - 4;
        break;
      case "CF":
        cf += choices[i] - 4;
        break;
      case "FC":
        cf -= choices[i] - 4;
        break;
      case "JM":
        jm += choices[i] - 4;
        break;
      case "MJ":
        jm -= choices[i] - 4;
        break;
      case "AN":
        an += choices[i] - 4;
        break;
      case "NA":
        an -= choices[i] - 4;
        break;
    }
  }
  res += rt <= 0 ? "R" : "T";
  res += cf <= 0 ? "C" : "F";
  res += jm <= 0 ? "J" : "M";
  res += an <= 0 ? "A" : "N";
  return res;
}
