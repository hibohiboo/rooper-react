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
      subPlotNum:2,
      selectedCharacterList:[]
    }
  }
  const scenario = store.scenario;
  const {selectedSet, selectedPlotList, characterList, selectedRoleList, characterRoleList, selectedCharacterList } = scenario;
  const tragedySetName = selectedSet.name;
  const subPlotNum = selectedSet.subplotNum;
console.log(selectedPlotList)
  return { 
    tragedySetName,
    selectedPlotList,
    subPlotNum,
    selectedCharacterList
  }
}

const MastermindCardContainer = connect(
  mapStateToProps
)(MastermindCard);

export default MastermindCardContainer;