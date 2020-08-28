const queryTypes = {
  top: '/movie/top_rated',
  popular: '/movie/popular',
  upcoming: '/movie/upcoming',
  search: '/search/movie',
  genre: '/discover/movie',
  genreList: '/genre/movie/list',
  movie: '/movie',
};

const buttonCategories = ['top', 'popular', 'upcoming'];

const key = 'f4f71b8883c5ec7ab8066b03fd5ab2f1';
const activeButtonStyle = {
  backgroundColor: '#00bfff',
  borderColor: '#00bfff',
  color: '#fff',
};
// eslint-disable-next-line
export {
  queryTypes, key, buttonCategories, activeButtonStyle,
};
