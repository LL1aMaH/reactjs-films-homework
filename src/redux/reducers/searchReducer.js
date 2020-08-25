const initialState = {
  movies: [],
  defaultSelectedGenre: 'genre',
  genreList: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchMovie: [action.payload] };
    case 'FETCH_MOVIES_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        movies: action.payload.results,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'SELECT_RESTART':
      return {
        ...state,
        defaultSelectedGenre: 'genre',
      };
    case 'SELECT_START':
      return {
        ...state,
        defaultSelectedGenre: action.payload,
      };
    case 'GENRE_LIST':
      return {
        ...state,
        genreList: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
