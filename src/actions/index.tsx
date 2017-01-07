import { Action } from 'redux';
import { TragedySet } from '../models/TragedySet';

/**
 * シナリオで使用されるアクション一覧
 */
export type ScenarioActions = ICreateAction | ISelectTragedySetAction;

export interface ICreateAction extends Action {
  type: 'CREATE_SCENARIO';
}

export interface ISelectTragedySetAction extends Action {
  type: 'SELECT_TRAGEDY_SET';
  set: TragedySet
}

export interface FETCH_GET_REQUEST extends Action{
  type: 'FETCH_GET_REQUEST'
}

export interface FETCH_GET_FAILURE extends Action{
  type: 'FETCH_GET_FAILURE',
  error:string
}

export interface FETCH_GET_SUCCESS extends Action{
  type: 'FETCH_GET_FAILURE',
  response: any;
}

let nextScenarioId:number = 0;

export function addScenario():ICreateAction{
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
