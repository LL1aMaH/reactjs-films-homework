import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import Back from './pages/Back';
import store from './redux/store';

import './style.scss';

const App = () => (
  <Provider store={store}>
    <div>
      <div className="container">
        <h1>Homework</h1>
      </div>
      <div className="container">
        <h1>part 2</h1>
      </div>
      <Back />
    </div>
  </Provider>
);

render(<App />, document.getElementById('App'));

if (module.hot) {
  module.hot.accept();
}
