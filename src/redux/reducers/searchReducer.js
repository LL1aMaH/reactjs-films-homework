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

const initialState = {
  movies: [],
  defaultSelectedGenre: 'genre',
  genreList: [],
  activeButton: 'top',
  previousCategories: 'top',
  mainFilm: {},
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.results,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SELECT_RESTART:
      return {
        ...state,
        defaultSelectedGenre: 'genre',
        activeButton: action.payload,
      };
    case SELECT_START:
      return {
        ...state,
        defaultSelectedGenre: action.payload,
        activeButton: 'genre',
      };
    case GENRE_LIST:
      return {
        ...state,
        genreList: action.payload,
      };
    case PREVIOUS_CATEGORY:
      return {
        ...state,
        previousCategories: action.payload,
      };
    case FETCH_MAIN_FILM:
      return {
        ...state,
        isLoading: false,
        mainFilm: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
