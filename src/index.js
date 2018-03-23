import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
// Components
import App from './App';
// Actions & Reducers
import reducers from './reducers';
// Create Store with Middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
