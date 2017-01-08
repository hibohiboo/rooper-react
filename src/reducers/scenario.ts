import { ScenarioActions } from '../actions';
import Scenario from '../models/Scenario';
import { TragedySet } from '../models/TragedySet';
import {Character} from '../models/Character';
const characterListData = require('../data/characterList');

const scenario = (state:Scenario = new Scenario, action?: ScenarioActions) => {
  switch (action.type) {
    case 'CREATE_SCENARIO':
      const {characterList, selectedCharacterList} = initCharacterList();
      return new Scenario(characterList, new TragedySet(),[], [], selectedCharacterList);
    case 'SELECT_TRAGEDY_SET':
      return new Scenario(state.characterList, action.set,[],[],state.selectedCharacterList);
    case 'SELECT_PLOT':
      return selectPlot(state, action);
    default:
      return state
  }
};

/**
 * ルールの追加・変更を行う
 */
function selectPlot({characterList, selectedSet, selectedPlotList}, {newPlot, oldPlotId}):Scenario{
  // 新規追加の場合、新しくルールリストに追加
  if(!oldPlotId){
    const newList = [...selectedPlotList, newPlot];
    return new Scenario(characterList, selectedSet, newList, createRoleList(selectedSet, newList));
  }

  // 変更の場合、古いルールの位置に新しいものを挿入
  const targetIndex = selectedPlotList.findIndex(plot=>plot.id === oldPlotId);
  selectedPlotList[targetIndex] = newPlot;
  const newList = [...selectedPlotList];
  return new Scenario(characterList, selectedSet, newList, createRoleList(selectedSet, newList));
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
  const characterList = characterListData.map(char=>new Character(char.id, char.name, char.paranoiaLimit));

  let selectedCharacterList = [];
  for(let i=0;i<9;i++){
    characterList[i].selected = true;
    selectedCharacterList.push(characterList[i]);
  }
  return {characterList, selectedCharacterList};
}

export default scenario;