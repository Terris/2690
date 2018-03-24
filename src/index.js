import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
// Components
import Match from './components/Match.js';
// Reducers
import reducers from './reducers';
// Create Store with Middleware
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Match />
    </div>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
