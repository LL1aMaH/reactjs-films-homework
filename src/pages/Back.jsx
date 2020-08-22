import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Example from '../Examplex';
import Search from '../components/search';
import Button from '../components/button';
import Name from '../components/name';
import Select from '../components/select';
import { getMovies } from '../redux/actions/actions';
import useDebounce from '../useDebounce';
import './Back.scss';
import logo from '../public/Movie_040311_3.jpg';
import epam from '../public/log.png';

// eslint-disable-next-line
import {
  nameButton1,
  nameButton2,
  dataFilm,
  typeGenre,
} from '../config.data'; // data for test

const Back = () => {
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector((state) => state.search);
  const [searchTerm, setSearchTerm] = useState('');
  const { isClearable } = useSelector((state) => state.search);

  const debauncedValue = useDebounce(searchTerm, 500);

  const handleClick = (text) => {
    console.log(text[text.length - 1]);
  };

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    if (searchTerm) {
      dispatch(getMovies('search', searchTerm));
    }
  }, [debauncedValue]);

  return (
    <div>
      <div className="background">
        <div className="search-block">
          <Search onInput={(e) => setSearchTerm(e.target.value.trim())} />
        </div>
        <div className="bottom-block">
          <div className="name-block">
            <Name dataFilm={dataFilm} />
          </div>
          <div className="bottom-button-block">
            <Button onClick={handleClick}>{nameButton1}</Button>
            <Button onClick={handleClick}>{nameButton2}</Button>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Button onClick={() => dispatch(getMovies('top'))}>Top rated</Button>
        <Button onClick={() => dispatch(getMovies('popular'))}>Popular</Button>
        <Button onClick={() => dispatch(getMovies('upcoming'))}>Comming Soon</Button>

        <Select
          isClearable={isClearable}
          onChange={() =>
            dispatch(getMovies('genre', typeGenre[event.target.value]))
          }
        />
      </div>
      {/* {isLoading && (
        <div className="searching">
          <Example text="spin" color="#000000" />
        </div>
      )} */}
      <div className="posters">
        {movies && movies.length ? (
          movies.map((result) => (
            <div className="poster" key={result.id}>
              {(result.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                  alt="poster"
                />
              )) || <img className="logo" src={logo} alt="logo" />}
              <span>{result.title}</span>
            </div>
          ))
        ) : (
          <img className="epam" src={epam} alt="Epam" />
        )}
      </div>
    </div>
  );
};

export default Back;
