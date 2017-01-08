import * as React from 'react';
import { Props, Component} from 'react';
import {tragedySetList, TragedySetType} from '../../models/TragedySet';
import {List, ListItem} from 'material-ui/List';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const plotList = [
    {"type":"M", "id":1,  "name":"殺人計画",             "roles":["キラー", "クロマク","キーパーソン"], "rules":[]},
    {"type":"M", "id":2,  "name":"封印されしモノ",       "roles":["クロマク", "カルティスト"],          "rules":[{"type":"敗北条件","timing":"ループ終了時","rule":"神社に[暗躍カウンター]が２つ以上ある。"}]},
    {"type":"M", "id":3,  "name":"僕と契約しようよ",     "roles":["キーパーソン"],                      "rules":[{"type":"敗北条件","timing":"ループ終了時","rule":"キーパーソンに[暗躍カウンター]が２個以上。"}, {"type":"強制","timing":"脚本作成時","rule":"キーパーソンは少女にしなくてはならない。"}]},
    {"type":"M", "id":4,  "name":"未来改変プラン",       "roles":["タイムトラベラー", "カルティスト"],     "rules":[{"type":"敗北条件","timing":"ループ終了時","rule":"このループ中に「事件：蝶の羽ばたき」が発生している。"}]},
    {"type":"M", "id":5,  "name":"巨大時限爆弾Xの存在",  "roles":["ウィッチ"],                        "rules":[{"type":"敗北条件","timing":"ループ終了時","rule":"ウィッチの初期エリアに[暗躍カウンター]が２つ以上。"}]},
    {"type":"S", "id":6,  "name":"友情サークル",         "roles":["フレンド", "フレンド", "ミスリーダー"], "rules":[]},
    {"type":"S", "id":7,  "name":"恋愛風景",             "roles":[ "メインラバーズ", "ラバーズ"],        "rules":[]},
    {"type":"S", "id":8,  "name":"因果の糸",             "roles":[],                                 "rules":[{"type":"強制", "timing":"ループ開始時", "rule":"ひとつ前のループ終了時に[友好カウンター]が置かれていた全キャラクターに[不安カウンター]を２つ置く。"}]},
    {"type":"S", "id":9,  "name":"不穏な噂",             "roles":["ミスリーダー"],                      "rules":[{"type":"任意能力", "timing":"脚本家能力フェイズ", "rule":"脚本家能力フェイズ】任意のボード１つに[暗躍カウンター]を１つ置く。", "limitation":"１ループに１回制限"}]},
    {"type":"S", "id":10, "name":"不確定因子χ",         "roles":["ファクター"],                        "rules":[]},
    {"type":"S", "id":11, "name":"潜む殺人鬼",           "roles":["フレンド", "シリアルキラー"],          "rules":[]},
    {"type":"S", "id":12, "name":"妄想拡大ウイルス",     "roles":["ミスリーダー"],                      "rules":[{"type":"強制", "timing":"常時", "rule":"パーソンは[不安カウンター]が３つ以上置かれている限り、役職がシリアルキラーに変更される。"}]}
  ]


interface IRuleProps extends Props<PlotForm>{
  label:string;
  plotList:any
  selectedPlot:any;
};
interface IRuleState {};

class Rule extends React.Component<IRuleProps, IState> {
  render(): JSX.Element{
    return (
      <SelectField
        floatingLabelText={this.props.label}
        value={this.props.selectedPlot && this.props.selectedPlot.id}
      >
        {this.props.plotList.map((plot) =>
          <MenuItem key={plot.id} value={plot.id} label={plot.name}>
            {plot.name}
          </MenuItem>
        )}
      </SelectField>
    );
  }
 }



interface IProps extends Props<PlotForm>{
  mainPlotList:any;
  subPlotLists:any;
  selectedPlotList:any;
};
interface IState {};
class PlotForm extends React.Component<IProps, IState> {

  render(): JSX.Element{
    return (
      <div>
        <Rule
          label={`ルールY`}
          plotList={this.props.mainPlotList} 
          selectedPlot={this.props.selectedPlotList.find(plot=> plot.type==='M')} />
        <br />
        {this.props.subPlotLists.map(subPlotList=>
          <Rule
            label={`ルールX`}
            plotList={subPlotList}
            selectedPlot={this.props.selectedPlotList.find(plot=> plot.type==='S')} />
        )}

      </div>
    );
  }
 }

 export default PlotForm;