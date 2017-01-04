import * as React from 'react';
import { Props, Component} from 'react';
import {tragedySetList, TragedySetType} from '../../models/TragedySet';

interface IProps extends Props<TragedySetForm>{
  id: TragedySetType;
  onChange: any; 
};
interface IState {};

class TragedySetForm extends React.Component<IProps, IState> {
  constructor(public props: IProps) {
    super(props);
    console.log(props);
  }
  public selectedNode:HTMLSelectElement;
  render(): JSX.Element{
    return (
      <select
          ref={(node)=>{
            this.selectedNode = node;
          }}
          value={this.props.id}
          onChange={(e) => {
           e.preventDefault();
           let selectedId = parseInt(this.selectedNode.value, 10);
           this.props.onChange(selectedId);
    console.log(this.props);
         }}>
        {tragedySetList.map((set) =>
          <option key={set.id} value={set.id}>{set.name}</option>
        )}
      </select>
    );
  }
 }

 export default TragedySetForm;