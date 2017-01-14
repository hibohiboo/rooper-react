import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from 'redux';
import reducers from './reducers';
import { createScenario, selectTragedySet, selectPlot, toggleCharacter, selectRole  } from './actions';
import { getTragedySet } from './services/TragedySetService';
import { TragedySetType } from './models/TragedySet';
import * as axios from 'axios';

const store = createStore(reducers);
store.dispatch(createScenario());

(async ()=>{
  const set = await getTragedySet(TragedySetType.basic);
  store.dispatch(selectTragedySet(set));
  store.dispatch(selectPlot({"num":1, "type":"M", "id":3,  "name":"僕と契約しようよ",     "roles":["キーパーソン"],                      "rules":[{"type":"敗北条件","timing":"ループ終了時","rule":"キーパーソンに[暗躍カウンター]が２個以上。"}, {"type":"強制","timing":"脚本作成時","rule":"キーパーソンは少女にしなくてはならない。"}]}
));
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
