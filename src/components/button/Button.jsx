import React from 'react';
import { func, node } from 'prop-types';
import './Button.scss';

const Button = ({ onClick, children }) => (
  <button type="button" className="button" onClick={onClick}>
    {children}
  </button>
);
Button.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
};

export default Button;
