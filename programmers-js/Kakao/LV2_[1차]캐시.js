// 2018 KAKAO BLIND RECRUITMENT

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  let time = 0;
  const cache = new Array(cacheSize).fill("");
  cities
    .map((city) => city.toLowerCase())
    .forEach((city) => {
      const index = cache.indexOf(city);
      if (index !== -1) {
        time++;
        cache.splice(index, 1);
        cache.push(city);
      } else {
        time += 5;
        cache.shift();
        cache.push(city);
      }
    });
  return time;
}
