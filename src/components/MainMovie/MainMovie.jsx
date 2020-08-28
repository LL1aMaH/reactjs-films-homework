/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../Search';
import Button from '../Button';
import MovieInfo from '../MovieInfo';
import useDebounce from '../../hooks/useDebounce';
import { getMovies } from '../../redux/actions/actions';

import './MainMovie.scss';

const MainMovie = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  const [styleMainInfo, setStyleMainInfo] = useState({ display: 'none' });

  const debauncedValue = useDebounce(searchTerm, 500);

  // eslint-disable-next-line
  const { previousCategories, defaultSelectedGenre, mainFilm } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    if (searchTerm) {
      dispatch(getMovies('search', searchTerm, defaultSelectedGenre));
    } else {
      dispatch(getMovies(previousCategories));
    }
  }, [debauncedValue]);

  const handleClick = (text) => {
    console.log(text[text.length - 1]);
  };

  return (
    <div>
      {mainFilm.backdrop_path && (
        <div
          className="background"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${mainFilm.backdrop_path})`,
          }}
        >
          <div className="searchBlock">
            <Search onInput={(e) => setSearchTerm(e.target.value.trim())} />
          </div>
          <div className="mainMovieInfo" style={styleMainInfo}>
            <p>{mainFilm.overview}</p>
          </div>
          <div className="bottomBlock">
            <div className="nameBlock">
              <MovieInfo dataFilm={mainFilm} genreFilm={mainFilm.genres} />
            </div>
            <div className="bottomButtonBlock">
              <Button onClick={handleClick}>Watch now</Button>
              <Button
                onClick={() =>
                  // eslint-disable-next-line
                  setStyleMainInfo(styleMainInfo.display ? {} : { display: 'none' })}
              >
                View info
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MainMovie;
