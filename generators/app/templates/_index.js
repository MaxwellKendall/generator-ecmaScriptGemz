import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './store/configureStore';
import configureHistory from './history/configureHistory';

import App from './components/App';

require('./scss/global.scss');

const store = configureStore();
const history = configureHistory();

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <Component />
        </AppContainer>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App); });
}
