import { combineReducers } from 'redux';
import scenario from './scenario';
// import todos from './todos'
// import visibilityFilter from './visibilityFilter';

// const todoApp = combineReducers({ 
//   todos,
//   visibilityFilter 
// });
const scenarioApp = combineReducers({
  scenario
});
export default scenarioApp;