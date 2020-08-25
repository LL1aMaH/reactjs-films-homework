import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Select.scss';

const Select = ({ onChange }) => {
  const { defaultSelectedGenre, genreList } = useSelector((state) => state.search);

  const [stateSelector, setStateSelector] = useState('');

  useEffect(() => {
    setStateSelector(defaultSelectedGenre);
  }, [defaultSelectedGenre]);

  return (
    <select onChange={onChange} className="select" value={stateSelector}>
      <option disabled hidden>
        {stateSelector}
      </option>
      {genreList.map((genre, i) => (
        <option value={i} key={genre.id} name={genre.name}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
