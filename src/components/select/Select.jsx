import React, { useState, useEffect } from 'react';
import { typeGenre } from '../../config.data';
import './Select.scss';

const Select = ({ isClearable, onChange }) => {
  const [state, setState] = useState();

  useEffect(() => {
    setState(isClearable);
  }, [isClearable]);
  console.log(`isClearable = ${isClearable}`);
  console.log(`state = ${state}`);

  return (
    <select defaultValue="Genre" onChange={onChange} className="select">
      <option disabled>Genre</option>
      {Object.keys(typeGenre).map((genre) => (
        <option value={genre} key={genre}>
          {genre[0].toUpperCase() + genre.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default Select;
