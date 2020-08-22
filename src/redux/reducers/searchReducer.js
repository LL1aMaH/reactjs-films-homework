const initialState = {
  movies: [],
  isClearable: false,
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
        isClearable: false,
      };
    case 'SELECT_START':
      return {
        ...state,
        isClearable: true,
      };
    default:
      return state;
  }
};

export default searchReducer;
