import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import './PosterHoverDetails.scss';

const PosterHoverDetails = ({ film, arrayGerres, style, onClick }) => {
  const data = '';

  return (
    <div className="posterHoverDetails" style={style}>
      <div className="posterHoverDetailsIcon">
        <FontAwesomeIcon icon={faWindowClose} size="1x" onClick={onClick} />
      </div>

      <div className="posterHoverDetailsNameRating">
        <div className="posterHoverDetailsName">{film.title}</div>
        <div className="posterHoverDetailsRating">
          {film.vote_average.toPrecision(2)}
        </div>
      </div>

      <div className="posterHoverDetailsGenres">
        {arrayGerres.map((result) => (
          <div key={result} className="posterHoverDetailsGenresFilm">
            {result}
          </div>
        ))}
      </div>
      <div className="posterHoverDetailsOverview">
        <p>{film.overview}</p>
      </div>
      <div className="posterHoverDetailButton">
        <Button>Watch now</Button>
      </div>
    </div>
  );
};
export default PosterHoverDetails;
