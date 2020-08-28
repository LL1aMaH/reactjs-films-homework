/* eslint-disable import/prefer-default-export */
export const getGenreFilm = (Film, genreList, quantity) => genreList
    .map((result) => {
      if (Film.genre_ids.includes(result.id)) return result.name;
    })
    .filter((i) => i)
    .slice(0, quantity);
