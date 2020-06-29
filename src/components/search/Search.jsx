import React from 'react';
import { connect } from 'react-redux';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onInput }) => (
  <div className="search">
    <input
      placeholder="Search..."
      className="js-search"
      type="text"
      onInput={() => onInput()}
    />
    <div className="icon">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  </div>
);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Search);
