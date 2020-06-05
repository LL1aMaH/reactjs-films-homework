import React from 'react';
import './name.scss';

const Name = (props) => {
  const data = props;
  return (
    <div className="name">
      <h2>{data.dataFilm.name}</h2>
      <div className="info">
        <span>{data.dataFilm.genre}</span>
        <div className="vl" />
        <span>{data.dataFilm.time}</span>
      </div>
      <div className="stars">
        <span>{data.dataFilm.stars}</span>
      </div>
    </div>
  );
};

export default Name;
