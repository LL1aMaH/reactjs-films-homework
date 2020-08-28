/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PosterHover from '../PosterHover';
import PosterHoverDetails from '../PosterHoverDetails';
import { getMainMovie } from '../../redux/actions/actions';
import logo from '../../public/Movie_040311_3.jpg';
import { getGenreFilm } from '../../redux/helper/getGenreFilm';
import './FilmCard.scss';

const FilmCard = ({ film }) => {
  const { id } = film;
  const { genreList } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const click = () => dispatch(getMainMovie(id));
  const [stylePosterHover, setstylePosterHover] = useState({});
  const [stylePosterHoverDetails, setstylePosterHoverDetails] = useState({
    display: 'none',
  });
  const arrayGerres = getGenreFilm(film, genreList, 3);
  const posterHoverButton = () => {
    setstylePosterHoverDetails({});
    setstylePosterHover({ display: 'none' });
  };
  const posterHoverDetailsButton = () => {
    setstylePosterHoverDetails({ display: 'none' });
    setstylePosterHover({});
  };
  return (
    <div className="poster">
      <PosterHover
        className="posterHover"
        onClick={posterHoverButton}
        style={stylePosterHover}
      />
      <PosterHoverDetails
        className="posterHoverDetails"
        film={film}
        arrayGerres={arrayGerres}
        style={stylePosterHoverDetails}
        onClick={posterHoverDetailsButton}
      />

      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
            : logo
        }
        alt={film.poster_path ? 'poster' : 'logo'}
      />
      <div className="filmCard" onClick={click}>
        <div className="filmCardInfo">
          <div className="filmCardTitle">{film.title}</div>
          <div className="filmCardRating">{film.vote_average.toPrecision(2)}</div>
        </div>
        <div className="filmgenres">
          {arrayGerres.map((result) => (
            <div key={result} className="filmgenre">
              {result}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FilmCard;
