import React from 'react';

import Search from '../components/search';
import Button from '../components/button';
import Name from '../components/name';

import './Back.scss';

import { nameButton1, nameButton2, dataFilm } from '../config.data'; // data for test

const handleClick = (text) => {
  // eslint-disable-next-line no-alert
  alert(`click ${text[text.length - 1]}`);
};

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
        <Button text={nameButton1} onClick={handleClick} />
        <Button text={nameButton2} onClick={handleClick} />
      </div>
    </div>
  </div>
);

export default Back;
