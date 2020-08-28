/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import './MovieInfo.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const getAverage = (average) => {
  const fullAverage = average / 2;
  const truncatedAverage = Math.trunc(fullAverage);
  return Array(5)
    .fill()
    .map((star, i) => {
      const key = i;
      if (i + 1 <= truncatedAverage) {
        return <FontAwesomeIcon icon={fasStar} key={key} size="lg" />;
      }
      if (i + 1 - fullAverage < 1) {
        return <FontAwesomeIcon icon={faStarHalfAlt} key={key} size="lg" />;
      }
      return <FontAwesomeIcon icon={farStar} key={key} size="lg" />;
    });
};

const MovieInfo = ({ dataFilm, genreFilm }) => (
  <div>
    {dataFilm && (
      <div className="name">
        <div className="title">{dataFilm.title}</div>
        <div className="info">
          {genreFilm.map((result) => (
            <div key={result.id} className="filmGenre">
              {result.name}
            </div>
          ))}
        </div>
        <div className="stars">
          <div>{getAverage(dataFilm.vote_average)}</div>
          <span>{dataFilm.vote_average}</span>
        </div>
      </div>
    )}
  </div>
);
MovieInfo.propTypes = {
  dataFilm: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
  genreFilm: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

MovieInfo.defaultProps = {
  dataFilm: {},
  genreFilm: [],
};

export default MovieInfo;
