/* eslint-disable import/no-unresolved */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Search.scss';

const Search = ({ onInput }) => (
  <div className="search">
    <input
      placeholder="Search..."
      className="js-search"
      type="text"
      onInput={onInput}
    />
    <div className="icon">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  </div>
);

export default Search;
