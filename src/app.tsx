import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from 'redux';
import reducers from './reducers';
import { addScenario, selectTragedySet  } from './actions';
// import { TRAGEDY_SETS } from './reducers/services/mock-tragedySets';
import TragedySetService from './reducers/services/TragedySetService';
import * as axios from 'axios';
// import {Promise} from 'es6-promise';
const TRAGEDY_SETS = TragedySetService.getTragedySets();

axios.interceptors.request.use(function (config) {
  config.timeout = 1000;
  config.responseType = 'json';
  return config;
}, function (error) {
  return Promise.reject(error);
});

let store = createStore(reducers);
store.dispatch(addScenario());
store.dispatch(selectTragedySet(TRAGEDY_SETS[1]));

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // reactのコンポーネントを#root以下に作成する
  document.getElementById('root')
);
