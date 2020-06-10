import React from 'react';
import './button.scss';

const Button = ({ text, onClick }) => (
  <button type="button" className="button" onClick={() => onClick(text)}>
    {text}
  </button>
);

export default Button;
