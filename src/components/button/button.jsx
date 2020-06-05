import React from 'react';
import './button.scss';

const Button = (props) => {
  const name = props;
  return (
    <button type="button" className="button">
      {name.nameButton}
    </button>
  );
};
export default Button;
