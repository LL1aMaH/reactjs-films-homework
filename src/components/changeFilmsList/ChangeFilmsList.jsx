import React from 'react';
import { useSelector } from 'react-redux';
import FilmCard from '../filmCard';
import epam from '../../public/log.png';

import './ChangeFilmsList.scss';

const ChangeFilmsList = () => {
  const { movies } = useSelector((state) => state.search);

  return (
    <div className="posters">
      {movies.length ? (
        movies.map((result) => <FilmCard film={result} />)
      ) : (
        <img className="epam" src={epam} alt="Epam" />
      )}
    </div>
  );
};
export default ChangeFilmsList;
