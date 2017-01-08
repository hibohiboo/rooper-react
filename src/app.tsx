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
  store.dispatch(selectPlot({"type":"M", "id":1,  "name":"殺人計画",             "roles":["キラー", "クロマク","キーパーソン"], "rules":[]}));
  store.dispatch(selectPlot({"type":"S", "id":7,  "name":"恋愛風景",             "roles":[ "メインラバーズ", "ラバーズ"],        "rules":[]}));
  store.dispatch(selectPlot({"type":"S", "id":9,  "name":"不穏な噂","roles":["ミスリーダー"],                      "rules":[{"type":"任意能力", "timing":"脚本家能力フェイズ", "rule":"脚本家能力フェイズ】任意のボード１つに[暗躍カウンター]を１つ置く。", "limitation":"１ループに１回制限"}]}));
  store.dispatch(selectPlot({"type":"S", "id":6,  "name":"友情サークル",         "roles":["フレンド", "フレンド", "ミスリーダー"], "rules":[]},7));
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
