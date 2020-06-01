import React from 'react';
import { render } from 'react-dom';

import './style.scss';

alert("А я знаю как ты ненавидишь alert'ы"); // eslint-disable-line

const App = () => (
  <div>
    <div className="container">
      <h1>Homework</h1>
    </div>
    <div className="container">part 1</div>

    <div className="logo" />

    <div className="box">
      <h2>scss</h2>
    </div>
  </div>
);

render(<App />, document.getElementById('App'));

if (module.hot) {
  module.hot.accept();
}

const a = 1;
