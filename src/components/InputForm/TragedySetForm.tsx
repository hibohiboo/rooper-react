import * as React from 'react';
import { Props, Component} from 'react';
import {tragedySetList, TragedySetType} from '../../models/TragedySet';

interface IProps extends Props<TragedySetForm>{
  id: TragedySetType;
  onChange: any; 
};
interface IState {};

class TragedySetForm extends React.Component<IProps, IState> {
  public static selectNode:HTMLSelectElement;
  render(): JSX.Element{
    return (
      <select
          ref={(node)=>{
            TragedySetForm.selectNode = node;
          }}
          value={this.props.id}
          onChange={(e) => {
           e.preventDefault();
           const id:TragedySetType = parseInt(TragedySetForm.selectNode.value, 10);
           this.props.onChange(id);
         }}>
        {tragedySetList.map((set) =>
          <option key={set.id} value={set.id}>{set.name}</option>
        )}
      </select>
    );
  }
 }

 export default TragedySetForm;