import { ScenarioActions } from '../actions';
import Scenario from '../models/Scenario';

const scenario = (state:Scenario = new Scenario, action?: ScenarioActions) => {
  switch (action.type) {
    case 'CREATE_SCENARIO':
      return new Scenario();
    case 'SELECT_TRAGEDY_SET':
      return new Scenario(action.set);
    case 'SELECT_PLOT':
      if(!action.oldPlotId){
         return new Scenario(state.selectedSet, [...state.selectedPlotList, action.newPlot]);
      }
      const targetIndex = state.selectedPlotList.findIndex(plot=>plot.id === action.oldPlotId);
      state.selectedPlotList[targetIndex] = action.newPlot;

      return new Scenario(state.selectedSet, [...state.selectedPlotList]);
    default:
      return state
  }
};

export default scenario;