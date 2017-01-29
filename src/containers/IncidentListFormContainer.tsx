import * as React from 'react';
import { connect } from 'react-redux';
import IncidentListForm from '../components/InputForm/IncidentListForm';
import {Scenario} from '../models/Scenario';
import {IIncident} from '../models/TragedySet';
// import { toggleCharacter, selectRole  } from '../actions';
interface IState{}

interface IProps{}

interface IStateToProps{
  incidentList:IIncident[];
}

interface IDispatchToProps{

}

/**
 * まだ選択されていない役職一覧を作成。
 */
const mapStateToProps = (store):IStateToProps => {
  const scenario:Scenario = store.scenario;
  if(!scenario){
      return { 
        incidentList:[]
    }
  }
  const {incidentList} = scenario.selectedSet;

  return {
            incidentList
          };
}

const mapDispatchToProps = (dispatch):IDispatchToProps => {
  return {
  }
}

const IncidentListFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentListForm);

export default IncidentListFormContainer;