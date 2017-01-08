import * as React from 'react';
import { connect } from 'react-redux';
import CharacterListForm from '../components/InputForm/CharacterListForm';
import Scenario from '../models/Scenario';

interface IState{}

interface IProps{}

interface IStateToProps{
  characterList:any;
}

interface IDispatchToProps{
  // onChange: any
}

const mapStateToProps = (store):IStateToProps => {
  const scenario:Scenario = store.scenario;
  if(!scenario || !scenario.characterList){
      return { 
        characterList:[],
    }
  }
  return {characterList:scenario.characterList};
}

const mapDispatchToProps = (dispatch):IDispatchToProps => {
  return {
    // onChange: (id:TragedySetType = TragedySetType.basic) => {
    //   (async ()=>{
    //     const res = await getTragedySet(id);
    //     const data:any = res.data;
    //     dispatch(selectTragedySet(data));
    //   })();
    // }
  }
}

const TragedySetFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListForm);

export default TragedySetFormContainer;