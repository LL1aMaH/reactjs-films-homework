import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import Main from './pages/Main';
import store from './redux/store';

import './style.scss';

const App = () => (
  <Provider store={store}>
    <div>
      <Main />
    </div>
  </Provider>
);

render(<App />, document.getElementById('App'));

if (module.hot) {
  module.hot.accept();
}
