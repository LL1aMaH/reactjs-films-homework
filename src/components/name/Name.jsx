import React from 'react';
import PropTypes from 'prop-types';
import './Name.scss';

const Name = ({ dataFilm }) => {
  // eslint-disable-next-line
  const { name, genre, time, stars } = dataFilm;
  return (
    <div className="name">
      <h2>{name}</h2>
      <div className="info">
        <span>{genre}</span>
        <div className="vl" />
        <span>{time}</span>
      </div>
      <div className="stars">
        <span>{stars}</span>
      </div>
    </div>
  );
};

Name.propTypes = {
  dataFilm: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    time: PropTypes.string,
    stars: PropTypes.number,
  }),
};

Name.defaultProps = {
  dataFilm: {},
};

export default Name;
