import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Select.scss';

const Select = ({ onChange }) => {
  const isClearable = useSelector((state) => state.search.isClearable);

  const genreList = useSelector((state) => state.search.genreList);
  const [stateSelector, setStateSelector] = useState('genre');

  useEffect(() => {
    setStateSelector(isClearable);
  }, [isClearable]);

  return (
    <select onChange={onChange} className="select" value={stateSelector}>
      <option disabled>{stateSelector}</option>
      {genreList.map((genre, i) => (
        <option value={i} key={genre.id} name={genre.name}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
