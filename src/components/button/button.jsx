import React from 'react';
import './button.scss';

const Button = ({ text, onClick }) => {
  const name = text;
  return (
    <button type="button" className="button" onClick={() => onClick(text)}>
      {name}
    </button>
  );
};

export default Button;
