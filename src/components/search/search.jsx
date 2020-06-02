import React from 'react';
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => (
  <div className="Search">
    <input placeholder="Search..." className="js-search" type="text" />
    <div className="icon">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  </div>
);
export default Search;
