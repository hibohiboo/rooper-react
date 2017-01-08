import { ScenarioActions } from '../actions';
import Scenario from '../models/Scenario';

const scenario = (state:Scenario = new Scenario, action?: ScenarioActions) => {
  switch (action.type) {
    case 'CREATE_SCENARIO':
      return new Scenario();
    case 'SELECT_TRAGEDY_SET':
      return new Scenario(action.set);
    case 'SELECT_PLOT':
      const selectedPlotList = action.oldPlotId ? state.selectedPlotList.filter(plot=>plot.id!==action.oldPlotId) : state.selectedPlotList;
      return new Scenario(state.selectedSet, [...selectedPlotList, action.newPlot]);
    default:
      return state
  }
};

export default scenario;