import React from 'react';

import FilmCard from '../FilmCard';
import epam from '../../public/log.png';

import './MovieSearchList.scss';

const MovieSearchList = ({ movies }) => (
  <div className="posters">
    {movies.length ? (
      movies.map((result) => <FilmCard film={result} key={result.id} />)
    ) : (
      <img className="epam" src={epam} alt="Epam" />
    )}
  </div>
);
export default MovieSearchList;
