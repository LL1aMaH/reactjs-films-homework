import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../components/search';
import Button from '../components/button';
import Name from '../components/name';
import searchName from '../redux/actions/actions';
import useDebounce from '../useDebounce';
import searchCharacters from '../searchCharacters';
import './Back.scss';

import { nameButton1, nameButton2, dataFilm } from '../config.data'; // data for test

const Back = () => {
  const dispatch = useDispatch();

  const handleClick = (text) => {
    console.log(text[text.length - 1]);
  };

  const onInput = (event) => {
    dispatch(searchName(event.target.value));
  };
  const { searchMovie } = useDebounce(
    useSelector((state) => state.search),
    500,
  );

  const [results, setResults] = useState([]);

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchMovie.length) {
      setIsSearching(true);
      searchCharacters(searchMovie, setResults);
      setIsSearching(false);
    } else {
      setResults([]);
    }
  }, [searchMovie]);

  return (
    <div>
      <div className="background">
        <div className="search-block">
          <Search onInput={onInput} />
        </div>
        <div className="bottom-block">
          <div className="name-block">
            <Name dataFilm={dataFilm} />
          </div>
          <div className="bottom-button-block">
            <Button text={nameButton1} onClick={handleClick} />
            <Button text={nameButton2} onClick={handleClick} />
          </div>
        </div>
      </div>
      {isSearching && <div className="searching">Searching ...</div>}
      <div className="posters">
        {results.map((result) => (
          <div className="poster" key={result.id}>
            {/* <h4>{result.title}</h4> */}
            {result.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                alt="poster"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Back;
