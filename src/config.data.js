const nameButton1 = 'Watch now';
const nameButton2 = 'View info';
const dataFilm = {
  name: 'Gentleman',
  genre: 'action',
  time: '113 min',
  stars: 10,
};

const queryTypes = {
  top: '/movie/top_rated',
  popular: '/movie/popular',
  upcoming: '/movie/upcoming',
  search: '/search/movie',
  genre: '/discover/movie',
  genreList: '/genre/movie/list',
};

const Key = 'f4f71b8883c5ec7ab8066b03fd5ab2f1';
// eslint-disable-next-line
export {
  nameButton1, nameButton2, dataFilm, queryTypes, Key,
};
