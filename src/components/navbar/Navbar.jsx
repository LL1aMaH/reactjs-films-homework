import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../button';
import Select from '../select';
import { getMovies, selectStart, getGenreList } from '../../redux/actions/actions';

import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const { genreList } = useSelector((state) => state.search);
  const handleChange = (event) => {
    dispatch(getMovies('genre', genreList[event.target.value].id));
    dispatch(selectStart(genreList[event.target.value].name));
  };
  useEffect(() => {
    dispatch(getGenreList());
  }, []);
  return (
    <div className="navbar">
      <Button onClick={() => dispatch(getMovies('top'))}>Top rated</Button>
      <Button onClick={() => dispatch(getMovies('popular'))}>Popular</Button>
      <Button onClick={() => dispatch(getMovies('upcoming'))}>Comming Soon</Button>

      <Select onChange={handleChange} />
    </div>
  );
};

export default Navbar;
