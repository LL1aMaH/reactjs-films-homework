import React from 'react';

import Search from '../components/search';
import Button from '../components/button';
import './Back.scss';

export default function Back() {
  return (
    <div className="background">
      <Search />
      <Button />
      <Button />
    </div>
  );
}
