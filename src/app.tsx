import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from 'redux';
import reducers from './reducers';
import { addScenario, selectTragedySet  } from './actions';
import { TRAGEDY_SETS } from './reducers/services/mock-tragedySets';

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
