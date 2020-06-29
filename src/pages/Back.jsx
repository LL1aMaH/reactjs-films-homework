import React from 'react';

import { connect } from 'react-redux';
import Search from '../components/search';
import Button from '../components/button';
import Name from '../components/name';
import store from '../redux/store';
import searchName from '../redux/actions/actions';
import './Back.scss';

import { nameButton1, nameButton2, dataFilm } from '../config.data'; // data for test

const handleClick = (text) => {
  console.log(text[text.length - 1]);
};

const onInput = () => {
  store.dispatch(searchName(document.querySelector('.js-search').value));
  store.subscribe(() => console.info(store.getState()));
};

const Back = () => (
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
);

export default connect(null)(Back);
