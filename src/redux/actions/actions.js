import { getURL } from '../helper/getURL';
import {
  FETCH_MOVIES_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SELECT_RESTART,
  SELECT_START,
  GENRE_LIST,
  PREVIOUS_CATEGORY,
  FETCH_MAIN_FILM,
} from '../actionTypes';

const fetchMovies = () => ({
  type: FETCH_MOVIES_START,
});

const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

const fetchError = (payload) => ({
  type: FETCH_ERROR,
  payload,
});

const selectRestart = (payload) => ({
  type: SELECT_RESTART,
  payload,
});

export const selectStart = (payload) => ({
  type: SELECT_START,
  payload,
});

const fetchGenreList = (payload) => ({
  type: GENRE_LIST,
  payload,
});

const changePreviousCategories = (payload) => ({
  type: PREVIOUS_CATEGORY,
  payload,
});

const fetchMainFilm = (payload) => ({
  type: FETCH_MAIN_FILM,
  payload,
});

export const getMainMovie = (id) => async (dispatch) => {
  const queryStringMainFilm = getURL('movie', id);

  try {
    const responseMainFilm = await fetch(queryStringMainFilm);
    const moviesMainFilm = await responseMainFilm.json();
    dispatch(fetchMainFilm(moviesMainFilm));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

// eslint-disable-next-line
export const getMovies = (searchBy = 'top', query, defaultSelectedGenre) => async (dispatch) => {

  if (searchBy !== 'search') {
    dispatch(changePreviousCategories(searchBy));
  }
  // eslint-disable-next-line
  searchBy !== 'genre'
    ? dispatch(selectRestart(searchBy))
    : dispatch(changePreviousCategories(defaultSelectedGenre));

  const queryString = getURL(searchBy, query);
  dispatch(fetchMovies());
  try {
    const response = await fetch(queryString);
    const movies = await response.json();

    dispatch(getMainMovie(movies.results[0].id));
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
