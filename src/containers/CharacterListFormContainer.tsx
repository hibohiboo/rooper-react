import * as React from 'react';
import { connect } from 'react-redux';
import CharacterListForm from '../components/InputForm/CharacterListForm';
import Scenario from '../models/Scenario';
import { toggleCharacter  } from '../actions';
interface IState{}

interface IProps{}

interface IStateToProps{
  characterList:any;
}

interface IDispatchToProps{
  onToggle:any;
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
    onToggle: (id:number) => {
      dispatch(toggleCharacter(id));
    }
  }
}

const TragedySetFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListForm);

export default TragedySetFormContainer;