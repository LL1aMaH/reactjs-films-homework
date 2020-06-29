import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const reduser = combineReducers({
  search: searchReducer,
});

export default reduser;
