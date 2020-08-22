import React from 'react';
import { typeGenre } from '../../config.data';
import './Select.scss';

const Select = ({ isClearable, onChange }) => (
  <select
    defaultValue="Genre"
    onChange={onChange}
    className="select"
    isClearable={isClearable}
  >
    <option disabled>Genre</option>
    {Object.keys(typeGenre).map((genre) => (
      <option value={genre} key={genre}>
        {genre[0].toUpperCase() + genre.slice(1)}
      </option>
    ))}
  </select>
);

export default Select;
