import * as React from 'react';
import { connect } from 'react-redux';
import IncidentListForm from '../components/InputForm/IncidentListForm';
import {Scenario} from '../models/Scenario';
import {IIncident} from '../models/TragedySet';
import { selectIncident  } from '../actions';
interface IState{}

interface IProps{}

interface IStateToProps{
  incidentList:IIncident[];
  daysInOneLoop:number;
  selectedIncidentList;
}

interface IDispatchToProps{
  onChangeIncident:any;
}

/**
 * まだ選択されていない役職一覧を作成。
 */
const mapStateToProps = (store):IStateToProps => {
  const scenario:Scenario = store.scenario;
  if(!scenario){
      return { 
        incidentList:[],
        daysInOneLoop:0,
        selectedIncidentList:[]
    }
  }
  const {incidentList} = scenario.selectedSet;
  const {daysInOneLoop, selectedIncidentList} = scenario;
  return {
            incidentList,
            selectedIncidentList,
            daysInOneLoop
          };
}

const mapDispatchToProps = (dispatch):IDispatchToProps => {
  return {
    onChangeIncident: (day, incidentId)=>{
       dispatch(selectIncident(day, incidentId));
    }
  }
}

const IncidentListFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentListForm);

export default IncidentListFormContainer;