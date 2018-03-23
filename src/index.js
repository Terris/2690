import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';
=======
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
>>>>>>> config
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
