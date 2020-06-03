import React from 'react';

import Search from '../components/search';
import Button from '../components/button';
import Name from '../components/name';

import './Back.scss';

export default function Back() {
  return (
    <div className="background">
      <Name />
      <Search />
      <Button />
      <Button />
    </div>
  );
}
