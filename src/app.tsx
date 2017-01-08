import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from 'redux';
import reducers from './reducers';
import { addScenario, selectTragedySet, selectPlot  } from './actions';
import { getTragedySet } from './services/TragedySetService';
import { TragedySetType } from './models/TragedySet';
import * as axios from 'axios';

const store = createStore(reducers);
store.dispatch(addScenario());

(async ()=>{
  const res = await getTragedySet(TragedySetType.basic);
  const data:any = res.data;
  store.dispatch(selectTragedySet(data));
})();



/**
 * reduxフレームワークを使用。  
 * ビューはreact
 */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  // reactのコンポーネントを#root以下に作成する
  document.getElementById('root')
);
