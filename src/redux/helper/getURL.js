/* eslint-disable import/prefer-default-export */
import { queryTypes, key } from '../../config.data';

const defaultURL = 'https://api.themoviedb.org/3';
const languageURL = 'language=en-US';

export const getURL = (searchBy, query) => {
  // eslint-disable-next-line
  const address = `${defaultURL}${queryTypes[searchBy]}`+(searchBy === 'movie' ? `/${query}?` : '?')+`api_key=${key}&${languageURL}`+(searchBy !== 'genre' ? `&page=1&query=${query}` : ((searchBy === 'movie') ? '' : `&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${query}`));
  return address;
};
