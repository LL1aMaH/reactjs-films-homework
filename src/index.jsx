import React from 'react';
import { render } from 'react-dom';

import './style.scss';
import Back from './pages/Back';

const App = () => (
  <div>
    <div className="container">
      <h1>Homework</h1>
    </div>
    <div className="container">part 2</div>
    <Back />
  </div>
);

render(<App />, document.getElementById('App'));

if (module.hot) {
  module.hot.accept();
}
