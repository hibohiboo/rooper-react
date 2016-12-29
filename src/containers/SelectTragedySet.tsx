import * as React from 'react';
import { connect } from 'react-redux';
import TragedySetForm from '../components/InputForm/TragedySetForm';
import { selectTragedySet  } from '../actions/index';
import { getTragedySet } from '../services/TragedySetService';
import { TragedySetType, TragedySet } from '../models/TragedySet';

interface IState{}

interface IProps{}

interface IStateToProps{
  id: TragedySetType;
}

interface IDispatchToProps{
  onChange: any
}

const mapStateToProps = (store):IStateToProps => {
  console.log(store);
  return { 
    id: 1
  }
}

const mapDispatchToProps = (dispatch):IDispatchToProps => {
  return {
    onChange: (id:TragedySetType = TragedySetType.basic) => {
      (async ()=>{
        const res = await getTragedySet(id);
        const data:any = res.data;
        dispatch(selectTragedySet(data));
      })();
    }
  }
}

const SelectTragedySet = connect(
  mapStateToProps,
  mapDispatchToProps
)(TragedySetForm);

export default SelectTragedySet;