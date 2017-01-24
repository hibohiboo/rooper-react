import { Action } from 'redux';
import { TragedySet } from '../models/TragedySet';
import { SelectedPlot } from '../models/Plot';

/**
 * シナリオ作成で使用されるアクション一覧
 */
export type ScenarioActions = ICreateAction | ISelectTragedySetAction | ISelectPlotAction | IToggleCharacterAction | ISelectRole | IInputDaysInOneLoop | IInputNumberOfLoops;

export interface ICreateAction extends Action {
  type: 'CREATE_SCENARIO';
}

export interface ISelectTragedySetAction extends Action {
  type: 'SELECT_TRAGEDY_SET';
  set: TragedySet
}

export interface ISelectPlotAction extends Action {
  type: 'SELECT_PLOT';
  newPlot: SelectedPlot;
  oldPlotId: number;
}

export interface IToggleCharacterAction extends Action {
  type: 'TOGGLE_CHARACTER';
  id: number;
}

export interface ISelectRole extends Action{
  type: 'SELECT_ROLE';
  roleKey: number;
  characterId:number;  
}

export interface IInputDaysInOneLoop extends Action{
  type: 'INPUT_DAYS_IN_ONE_LOOP';
  daysInOneLoop: number;
}

export interface IInputNumberOfLoops extends Action{
  type: 'INPUT_NUMBER_OF_LOOPS';
  numberOfLoops: number;
}

let nextScenarioId:number = 0;

export function createScenario():ICreateAction{
  return {
    type: 'CREATE_SCENARIO'
  }
}

export function selectTragedySet( set:TragedySet ):ISelectTragedySetAction{
  return {
    type: 'SELECT_TRAGEDY_SET',
    set
  }
}

export function selectPlot( newPlot:SelectedPlot, oldPlotId:number = null ):ISelectPlotAction{
  return {
    type: 'SELECT_PLOT',
    newPlot,
    oldPlotId
  }
}

export function toggleCharacter(id:number):IToggleCharacterAction{
  return {
    type: 'TOGGLE_CHARACTER',
    id
  }
}

export function selectRole(roleKey:number, characterId:number): ISelectRole{
  return {
    type: 'SELECT_ROLE',
    roleKey,
    characterId  
  }
}

export function inputDaysInOneLoop(daysInOneLoop:number):IInputDaysInOneLoop{
  return {
    type: 'INPUT_DAYS_IN_ONE_LOOP',
    daysInOneLoop
  }
}

export function inputNumberOfLoops(numberOfLoops:number):IInputNumberOfLoops{
  return {
    type: 'INPUT_NUMBER_OF_LOOPS',
    numberOfLoops
  }
}

export interface FETCH_GET_REQUEST extends Action{
  type: 'FETCH_GET_REQUEST'
}

export interface FETCH_GET_FAILURE extends Action{
  type: 'FETCH_GET_FAILURE',
  error:string
}

export interface FETCH_GET_SUCCESS extends Action{
  type: 'FETCH_GET_SUCCESS',
  response: any;
}
