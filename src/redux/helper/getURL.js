import { queryTypes, Key } from '../../config.data';

const getURL = (searchBy, query) => {
  let address = '';

  if (searchBy !== 'genre') {
    address = `https://api.themoviedb.org/3${queryTypes[searchBy]}?api_key=${Key}&language=en-US&page=1&query=${query}`;
  } else {
    address = `https://api.themoviedb.org/3/discover/movie?api_key=${Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${query}`;
  }
  return address;
};

export { getURL };
