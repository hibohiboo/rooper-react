import { connect } from 'react-redux';
import MastermindCard from '../components/MastermindCard';
import Scenario from '../models/Scenario';

interface IState{
  scenario:Scenario
}

const mapStateToProps = (store:IState, ownProps) => {
  let tragedySetName:string = '';
  let selectedPlotList = [{name:"Y", type:"M"}, {name:"X1", type:"S"}, {name:"X2", type:"M"}];
  let subPlotNum = 2;
  if(store.scenario){
    let scenario = store.scenario;
    let selectedSet = scenario.selectedSet; 
    tragedySetName = selectedSet.name;
    selectedPlotList = scenario.selectedPlotList;
    subPlotNum = selectedSet.subplotNum;
  }
  return { 
    tragedySetName,
    selectedPlotList,
    subPlotNum
  }
}

const VisibleMastermindCardContainer = connect(
  mapStateToProps
)(MastermindCard);

export default VisibleMastermindCardContainer;