import React from 'react';
import { render } from 'react-dom';
import Back from './pages/Back';

import './style.scss';

const App = () => (
  <div>
    <div className="container">
      <h1>Homework</h1>
    </div>
    <div className="container">
      <h1>part 2</h1>
    </div>
    <Back />
  </div>
);

render(<App />, document.getElementById('App'));

if (module.hot) {
  module.hot.accept();
}
