import { ScenarioActions } from '../actions';
import Scenario from '../models/Scenario';

const scenario = (state:Scenario = new Scenario, action?: ScenarioActions) => {
  switch (action.type) {
    case 'CREATE_SCENARIO':
      return new Scenario();
    case 'SELECT_TRAGEDY_SET':
      return new Scenario(action.set);
    case 'SELECT_PLOT':
      // 新規追加の場合、新しくルールリストに追加
      if(!action.oldPlotId){
         return new Scenario(state.selectedSet, [...state.selectedPlotList, action.newPlot]);
      }

      // 変更の場合、古いルールの位置に新しいものを挿入
      const targetIndex = state.selectedPlotList.findIndex(plot=>plot.id === action.oldPlotId);
      state.selectedPlotList[targetIndex] = action.newPlot;

      return new Scenario(state.selectedSet, [...state.selectedPlotList]);
    default:
      return state
  }
};

export default scenario;