import { Action } from 'redux';
import { VisibilityFilterType } from '../states/VisibilityFilterType';
import { TragedySet } from '../models/TragedySet';

export type ScenarioActions = ICreateAction | ISelectTragedySetAction;

export interface ICreateAction extends Action {
  type: 'CREATE_SCENARIO';
}

export interface ISelectTragedySetAction extends Action {
  type: 'SELECT_TRAGEDY_SET';
  set:TragedySet;
}


export type TodoActions = IAddTodoAction | IToggleTodoAction;

export interface IAddTodoAction extends Action {
    type: 'ADD_TODO';
    id: number;
    text: string;
}

export interface IToggleTodoAction extends Action {
    type: 'TOGGLE_TODO';
    id: number;
}

export interface IVisibilityFilter extends Action{
    type: 'SET_VISIBILITY_FILTER',
    filter: VisibilityFilterType
}

let nextTodoId:number = 0;

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



// actionを発行する関数
export function addTodo(text:string) : IAddTodoAction {
  // actionはtypeを持つオブジェクト
  // この場合、アクションタイプはADD_TODO
  // データはidとtextとなる。
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id:number) : IToggleTodoAction => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setVisibilityFilter = (filter:VisibilityFilterType) : IVisibilityFilter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}