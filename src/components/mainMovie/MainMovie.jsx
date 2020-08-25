import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../search';
import Button from '../button';
import Name from '../name';
import useDebounce from '../../useDebounce';
import { getMovies } from '../../redux/actions/actions';
import { getGenreFilm } from '../../redux/helper/getGenreFilm';

import './MainMovie.scss';

// eslint-disable-next-line
import {
  nameButton1,
  nameButton2,
} from '../../config.data'; // data for test


const MainMovie = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  const debauncedValue = useDebounce(searchTerm, 500);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    if (searchTerm) {
      dispatch(getMovies('search', searchTerm));
    }
  }, [debauncedValue]);

  const handleClick = (text) => {
    console.log(text[text.length - 1]);
  };

  const { movies, genreList } = useSelector((state) => state.search);
  const [mainFilm, setMainFilm] = useState('');
  const [mainFilmGenre, setMainFilmGenre] = useState('');

  useEffect(() => {
    setMainFilm(movies[0]);
  }, [movies]);

  useEffect(() => {
    setMainFilmGenre(getGenreFilm(mainFilm, genreList));
  }, [mainFilm]);

  return (
    <div>
      {mainFilm && (
        <div
          className="background"
          style={{
            backgroundImage:
              'url(' +
              `https://image.tmdb.org/t/p/w500${mainFilm.backdrop_path}` +
              ')',
          }}
        >
          <div className="search-block">
            <Search onInput={(e) => setSearchTerm(e.target.value.trim())} />
          </div>
          <div className="bottom-block">
            <div className="name-block">
              <Name dataFilm={mainFilm} genreFilm={mainFilmGenre} />
            </div>
            <div className="bottom-button-block">
              <Button onClick={handleClick}>{nameButton1}</Button>
              <Button onClick={handleClick}>{nameButton2}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MainMovie;
