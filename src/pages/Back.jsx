import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../components/search';
import Button from '../components/button';
import Name from '../components/name';
import searchName from '../redux/actions/actions';
import useDebounce from '../useDebounce';
// import searchCharacters from '../searchCharacters';
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
    500
  );

  const [results, setResults] = useState([]);

  const [isSearching, setIsSearching] = useState(false);

  // const [search, setSearch] = useState('');

  async function searchCharacters(search) {
    const Key = 'f4f71b8883c5ec7ab8066b03fd5ab2f1';
    const queryString = `https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${search}`;

    const data = await fetch(`${queryString}`, {
      headers: { accept: 'application/json' },
    });
    const res = await data.json();

    setResults(res.results);
    for (const key in results) {
      console.log(key);
      console.log(results[key]);
    }
  }

  useEffect(() => {
    if (searchMovie.length) {
      setIsSearching(true);
      searchCharacters(searchMovie);
      console.log(`searchMovie = ${searchMovie}`);
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
      {/* {results.map((result) => (
        <div key={result.id}>
          <h4>{result.title}</h4>
        </div>
      ))} */}
    </div>
  );
};

export default Back;
