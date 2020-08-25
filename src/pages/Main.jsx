import React from 'react';

// import Example from '../Examplex';

import MainMovie from '../components/mainMovie';
import ChangeFilmsList from '../components/changeFilmsList';
import Navbar from '../components/navbar/Navbar';
import './Main.scss';

const Main = () => (
  <div className="Main">
    <MainMovie />
    <Navbar />
    <ChangeFilmsList />
  </div>
);

export default Main;
