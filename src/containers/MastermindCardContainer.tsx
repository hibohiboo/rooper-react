import { connect } from 'react-redux';
import MastermindCard from '../components/MastermindCard';
import Scenario from '../models/Scenario';

interface IState{
  scenario:Scenario
}

const mapStateToProps = (store:IState, ownProps) => {
  if(!store.scenario){
    return { 
      tragedySetName:'',
      selectedPlotList:[],
      subPlotNum:2
    }
  }
  const scenario = store.scenario;
  const selectedSet = scenario.selectedSet; 
  const tragedySetName = selectedSet.name;
  const selectedPlotList = scenario.selectedPlotList;
  const subPlotNum = selectedSet.subplotNum;

  return { 
    tragedySetName,
    selectedPlotList,
    subPlotNum
  }
}

const MastermindCardContainer = connect(
  mapStateToProps
)(MastermindCard);

export default MastermindCardContainer;