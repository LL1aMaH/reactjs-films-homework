import React from 'react';
import { string, func } from 'prop-types';
import './button.scss';

const Button = ({ text, onClick }) => (
  <button type="button" className="button" onClick={() => onClick(text)}>
    {text}
  </button>
);
Button.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
};

export default Button;
