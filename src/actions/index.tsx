import { Action } from 'redux';
import { TragedySet } from '../models/TragedySet';
import { SelectedPlot } from '../models/Plot';

/**
 * シナリオ作成で使用されるアクション一覧
 */
export type ScenarioActions = ICreateAction | ISelectTragedySetAction | ISelectPlotAction | IToggleCharacterAction;

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
