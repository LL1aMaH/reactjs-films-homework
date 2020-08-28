import React from 'react';
import { useSelector } from 'react-redux';

// import Example from '../Examplex';

import MainMovie from '../components/MainMovie';
import MovieSearchList from '../components/MovieSearchList';
import Navbar from '../components/Navbar';
import './Main.scss';

const Main = () => {
  const { movies } = useSelector((state) => state.search);
  return (
    <div className="Main">
      <MainMovie />
      <Navbar movies={movies} />
      <MovieSearchList movies={movies} />
    </div>
  );
};

export default Main;
