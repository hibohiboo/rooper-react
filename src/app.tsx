import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from 'redux';
import reducers from './reducers';
import { addScenario, selectTragedySet  } from './actions';
import {getTragedySet} from './reducers/services/TragedySetService';
import * as axios from 'axios';

const store = createStore(reducers);
store.dispatch(addScenario());

(async ()=>{
  const res = await axios.get('/tragedySets/basicTragedy.json');
  const data:any = res.data;
  store.dispatch(selectTragedySet(data));
})();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // reactのコンポーネントを#root以下に作成する
  document.getElementById('root')
);
