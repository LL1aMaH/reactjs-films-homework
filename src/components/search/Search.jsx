import React from 'react';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => (
  <div className="search">
    <input placeholder="Search..." className="js-search" type="text" />
    <div className="icon">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  </div>
);
export default Search;
