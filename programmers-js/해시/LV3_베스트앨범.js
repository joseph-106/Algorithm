function solution(genres, plays) {
  const songs = [];
  const hash = new Map();

  for (let i = 0; i < genres.length; i++) {
    const [num, genre, play] = [i, genres[i], plays[i]];

    songs.push([num, genre, play]);
    hash.set(genre, hash.has(genre) ? hash.get(genre) + play : play);
  }

  const sortedSongs = [...songs].sort((a, b) => b[2] - a[2]);
  const sortedHash = [...hash].sort((a, b) => b[1] - a[1]);
  const bestAlbum = [];

  sortedHash
    .map((e) => e[0])
    .forEach((genre) => {
      const sortedGenreSongs = sortedSongs.filter((song) => song[1] === genre);

      if (sortedGenreSongs.length >= 2) {
        const [first, second] =
          sortedGenreSongs[0][2] === sortedGenreSongs[1][2] &&
          sortedGenreSongs[0][1] > sortedGenreSongs[1][1]
            ? [sortedGenreSongs[1][0], sortedGenreSongs[0][0]]
            : [sortedGenreSongs[0][0], sortedGenreSongs[1][0]];

        bestAlbum.push(first, second);
      } else bestAlbum.push(sortedGenreSongs[0][0]);
    });

  return bestAlbum;
}
