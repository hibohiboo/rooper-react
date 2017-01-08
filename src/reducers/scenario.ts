import { ScenarioActions } from '../actions';
import Scenario from '../models/Scenario';
import { TragedySet } from '../models/TragedySet';
const characterList = require('../data/characterList');

const scenario = (state:Scenario = new Scenario, action?: ScenarioActions) => {
  switch (action.type) {
    case 'CREATE_SCENARIO':
      return new Scenario(new TragedySet(),[], [], initCharacterList());
    case 'SELECT_TRAGEDY_SET':
      return new Scenario(action.set);
    case 'SELECT_PLOT':
      return selectPlot(state, action);
    default:
      return state
  }
};

/**
 * ルールの追加・変更を行う
 */
function selectPlot({selectedSet, selectedPlotList}, {newPlot, oldPlotId}):Scenario{
  // 新規追加の場合、新しくルールリストに追加
  if(!oldPlotId){
    const newList = [...selectedPlotList, newPlot];
    return new Scenario(selectedSet, newList, createRoleList(selectedSet, newList));
  }

  // 変更の場合、古いルールの位置に新しいものを挿入
  const targetIndex = selectedPlotList.findIndex(plot=>plot.id === oldPlotId);
  selectedPlotList[targetIndex] = newPlot;
  const newList = [...selectedPlotList];
  return new Scenario(selectedSet, newList, createRoleList(selectedSet, newList));
}

/**
 * 選択中のルールから役職の一覧を作成する
 */
function createRoleList(selectedSet, selectedPlotList){
  let selectedRoleList =[];
  selectedPlotList.forEach(plot=>{
    plot.roles.forEach(role_name=>{
      const role = selectedSet.roleList.find(role=>role.name === role_name);
      // 役職の上限を超えていなければ役職リストに追加
      if( ! role.limit || role.limit > selectedRoleList
                                          .filter( role => role.name === role_name )
                                          .length){
        const copy = Object.assign({}, role);
        selectedRoleList.push(copy);
      }
    });
  });
  return selectedRoleList;
}

function initCharacterList(){
  console.log(characterList);
  return characterList;
}

export default scenario;