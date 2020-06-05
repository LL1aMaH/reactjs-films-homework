import React from 'react';

import Search from '../components/search';
import Button from '../components/button';
import Name from '../components/name';

import './Back.scss';

import { nameButton1, nameButton2, dataFilm } from '../config.data'; // data for test

const Back = () => (
  <div className="background">
    <div className="search-block">
      <Search />
    </div>
    <div className="bottom-block">
      <div className="name-block">
        <Name dataFilm={dataFilm} />
      </div>
      <div className="bottom-button-block">
        <Button nameButton={nameButton1} />
        <Button nameButton={nameButton2} />
      </div>
    </div>
  </div>
);

export default Back;
