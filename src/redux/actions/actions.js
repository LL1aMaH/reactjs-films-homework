import { getURL } from '../helper/getURL';

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

export const selectStart = (payload) => ({
  type: 'SELECT_START',
  payload,
});

const fetchGenreList = (payload) => ({
  type: 'GENRE_LIST',
  payload,
});

// eslint-disable-next-line
export const getMovies = (searchBy = 'top', query) => async (dispatch) => {
  const queryString = getURL(searchBy, query);
  if (searchBy !== 'genre') dispatch(selectRestart());
  dispatch(fetchMovies());
  try {
    const response = await fetch(queryString);
    const movies = await response.json();
    dispatch(fetchSuccess(movies));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const getGenreList = () => async (dispatch) => {
  const data = getURL('genreList');
  try {
    const response = await fetch(data);
    const genreList = await response.json();
    dispatch(fetchGenreList(genreList.genres));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
