/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button';
import Select from '../Select';
import { getMovies, selectStart, getGenreList } from '../../redux/actions/actions';
import { buttonCategories, activeButtonStyle } from '../../config.data';

import './Navbar.scss';
import { array } from 'prop-types';

const Navbar = () => {
  const dispatch = useDispatch();
  const { genreList, activeButton } = useSelector((state) => state.search);
  const handleChange = (event) => {
    dispatch(getMovies('genre', genreList[event.target.value].id));
    dispatch(selectStart(genreList[event.target.value].name));
  };
  useEffect(() => {
    dispatch(getGenreList());
  }, []);

  return (
    <div className="navbar" style={genreList.length ? {} : { display: 'none' }}>
      {buttonCategories.map((result) => (
        <Button
          key={result}
          style={result === activeButton ? activeButtonStyle : {}}
          onClick={() => dispatch(getMovies(result))}
        >
          {result}
        </Button>
      ))}
      <Select
        onChange={handleChange}
        style={activeButton === 'genre' ? activeButtonStyle : {}}
      />
    </div>
  );
};

export default Navbar;
