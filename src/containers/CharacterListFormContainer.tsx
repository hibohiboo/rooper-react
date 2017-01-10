import * as React from 'react';
import { connect } from 'react-redux';
import CharacterListForm from '../components/InputForm/CharacterListForm';
import Scenario from '../models/Scenario';
import { toggleCharacter, selectRole  } from '../actions';
interface IState{}

interface IProps{}

interface IStateToProps{
  characterList:any;
  unallocatedRoleList:any;
}

interface IDispatchToProps{
  onToggle:any;
  onChange:any;
}

const mapStateToProps = (store):IStateToProps => {
  const scenario:Scenario = store.scenario;
  const {characterList, selectedRoleList} = scenario;
  if(!scenario || !scenario.characterList){
      return { 
        characterList:[],
        unallocatedRoleList:[]
    }
  }
  const unallocatedRoleList = selectedRoleList.filter(r => r.selected===false);
  return {
            characterList,
            unallocatedRoleList
          };
}

const mapDispatchToProps = (dispatch):IDispatchToProps => {
  return {
    onToggle: (id:number) => {
      dispatch(toggleCharacter(id));
    },
    onChange: (characterId, roleId)=>{
        dispatch(selectRole(characterId, roleId));
    }
  }
}

const TragedySetFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListForm);

export default TragedySetFormContainer;