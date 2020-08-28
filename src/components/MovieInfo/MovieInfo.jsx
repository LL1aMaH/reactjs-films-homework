/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import './MovieInfo.scss';
import MovieInfoRating from '../MovieInfoRating/MovieInfoRating.js';

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
          <MovieInfoRating stars={dataFilm.vote_average} />
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
};

MovieInfo.defaultProps = {
  dataFilm: {},
  genreFilm: [],
};

export default MovieInfo;
