import { connect } from 'react-redux';
import MastermindCard from '../components/MastermindCard';
import Scenario from '../models/Scenario';

interface IState{
  scenario:Scenario
}

const mapStateToProps = (store:IState, ownProps) => {
  let tragedySetName:string = '';
  console.log('mapState');
  console.log(store.scenario);
  console.log(store.scenario.selectedSet.name);
  if(store.scenario){
    tragedySetName = store.scenario.selectedSet.name;
  }
  return { 
    tragedySetName
  }
}

const VisibleMastermindCard = connect(
  mapStateToProps
)(MastermindCard);

export default VisibleMastermindCard;