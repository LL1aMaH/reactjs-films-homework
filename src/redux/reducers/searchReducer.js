import initialState from '../initialState';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchMovie: [action.payload] };
    default:
      return state;
  }
};

export default searchReducer;
