import { connect } from 'react-redux';
import Scenario from '../models/Scenario';
import DaysPerLoopForm from '../components/InputForm/DaysPerLoopForm';
import {inputDaysPerLoop} from '../actions';
interface IStateToProps{
  daysPerLoop:number;
}

interface IDispatchToProps{
  // onChange:any;
}

const mapStateToProps = (store):IStateToProps => {
  const scenario:Scenario = store.scenario;
  if(!scenario){
      return {daysPerLoop:8}
  }
  const {daysPerLoop} = scenario;

  return {daysPerLoop};
}

const mapDispatchToProps = (dispatch):IDispatchToProps => {
  return {
    onChange: (daysPerLoop)=>{
        dispatch(inputDaysPerLoop(daysPerLoop));
    }
  }
}

const DaysPerLoopFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DaysPerLoopForm);

export default DaysPerLoopFormContainer;