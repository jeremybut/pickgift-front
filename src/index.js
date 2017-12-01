import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import App from './App';

import './index.css';
import SnacksProvider from './containers/SnacksProvider';
import I18nProvider from './containers/I18nProvider';

import VillagesList from './containers/VillagesList';
import Village from './containers/Village';
import EditVillage from './containers/EditVillage';
import NewVillage from './containers/NewVillage';

import Gift from './containers/Gift';

import Login from './containers/Login';
import Signup from './containers/Signup';
import pickGiftReducer from './reducers';
import { loadState, saveState } from './api/localStorage';

const persistedState = loadState();
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(
  pickGiftReducer,
  persistedState,
  window.devToolsExtension && window.devToolsExtension(),
);
store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

const FourOFour = () => <h1>404</h1>;

ReactDOM.render(
  <div>
    <Provider store={store}>
      <I18nProvider>
        <SnacksProvider>
          <Router history={browserHistory}>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/gift" component={Gift} />
            <Route path="/" component={App}>
              <IndexRoute component={VillagesList} />
              <Route path="villages">
                <IndexRoute component={VillagesList} />
                <Route path="/village/:id" component={Village} />
                <Route path="/village/:id/edit" component={EditVillage} />
                <Route path="new" component={NewVillage} />
              </Route>
              <Route path="*" component={FourOFour} />
            </Route>
          </Router>
        </SnacksProvider>
      </I18nProvider>
    </Provider>
  </div>,
  document.getElementById('root'),
);
