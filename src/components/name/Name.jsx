import React from 'react';
import PropTypes from 'prop-types';
import './Name.scss';

const Name = ({ dataFilm, genreFilm }) => (
  <div>
    {dataFilm && (
      <div className="name">
        <div className="title">{dataFilm.title}</div>
        <div className="info">
          {genreFilm.map((result) => (
            <div key={result} className="filmGenre">
              {result}
            </div>
          ))}
        </div>
        <div className="stars">
          <span>{dataFilm.vote_average}</span>
        </div>
      </div>
    )}
  </div>
);
Name.propTypes = {
  dataFilm: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

Name.defaultProps = {
  dataFilm: {},
  genreFilm: [],
};

export default Name;
