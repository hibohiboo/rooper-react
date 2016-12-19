import { ScenarioActions } from '../actions';
import Scenario from '../models/Scenario';

const scenario = (state:Scenario = new Scenario, action?: ScenarioActions) => {
  switch (action.type) {
    case 'CREATE_SCENARIO':
      return new Scenario();
    case 'SELECT_TRAGEDY_SET':
      return new Scenario(action.set);
    default:
      return state
  }
};

export default scenario;