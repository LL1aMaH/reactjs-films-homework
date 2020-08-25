import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../public/Movie_040311_3.jpg';
import { getGenreFilm } from '../../redux/helper/getGenreFilm';

import './FilmCard.scss';

const FilmCard = ({ film }) => {
  const { genreList } = useSelector((state) => state.search);

  return (
    <div className="poster" key={film.id}>
      {(film.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt="poster"
        />
      )) || <img className="logo" src={logo} alt="logo" />}
      <div className="FilmCardInfo">
        <div className="FilmCardTitle">{film.title}</div>
        <div className="FilmCardRating">{film.vote_average.toPrecision(2)}</div>
      </div>
      <div className="filmgenres">
        {getGenreFilm(film, genreList, 3).map((result) => (
          <div key={result} className="filmgenre">
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FilmCard;
