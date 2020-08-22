import { queryTypes, Key } from '../../config.data';

const fetchMovies = () => ({
  type: 'FETCH_MOVIES_START',
});

const fetchSuccess = (payload) => ({
  type: 'FETCH_SUCCESS',
  payload,
});

const fetchError = (payload) => ({
  type: 'FETCH_ERROR',
  payload,
});

const selectRestart = () => ({
  type: 'SELECT_RESTART',
});

const selectStart = () => ({
  type: 'SELECT_START',
});

const getURL = (searchBy, query) => {
  let address = '';
  let select = false;
  if (searchBy !== 'genre') {
    address = `https://api.themoviedb.org/3${queryTypes[searchBy]}?api_key=${Key}&language=en-US&page=1&query=${query}`;
  } else {
    address = `https://api.themoviedb.org/3/discover/movie?api_key=${Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${query}`;
    select = true;
  }
  return [address, select];
};
// eslint-disable-next-line
export const getMovies = (searchBy = 'top', query) => async (dispatch) => {
  const [queryString, select] = getURL(searchBy, query);
  // console.log(select);
  select ? dispatch(selectStart()) : dispatch(selectRestart());
  dispatch(fetchMovies());
  try {
    const response = await fetch(queryString);
    const movies = await response.json();
    dispatch(fetchSuccess(movies));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
