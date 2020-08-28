import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import './PosterHover.scss';

const PosterHover = ({ onClick, style = {} }) => {
  const data = 'film.overview';
  return (
    <div className="posterHover" style={style}>
      <div className="posterHoverIcon">
        <FontAwesomeIcon icon={faPlayCircle} size="7x" />
      </div>
      <Button onClick={onClick}>View info</Button>
    </div>
  );
};
export default PosterHover;
