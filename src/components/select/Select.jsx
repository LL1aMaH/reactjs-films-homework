import React, { useState, useEffect } from 'react';
import { typeGenre } from '../../config.data';
import './Select.scss';

const Select = ({ isClearable, onChange }) => {
  const [state, setState] = useState('Genre');

  useEffect(() => {
    setState(isClearable);
  }, [isClearable]);
  console.log(`isClearable = ${isClearable}`);
  console.log(`state = ${state}`);

  return (
    <select
      // defaultValue={state}
      onChange={onChange}
      className="select"
      value={state}
    >
      <option disabled>{state}</option>
      {Object.keys(typeGenre).map((genre) => (
        <option value={genre} key={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};

export default Select;
