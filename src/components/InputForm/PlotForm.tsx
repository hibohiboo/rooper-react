import * as React from 'react';
import { Props, Component} from 'react';
import {tragedySetList, TragedySetType} from '../../models/TragedySet';

interface IProps extends Props<PlotForm>{
  id: TragedySetType;
};
interface IState {};

class PlotForm extends React.Component<IProps, IState> {
  constructor(public props: IProps) {
    super(props);
  }
  public selectedNode:HTMLSelectElement;
  render(): JSX.Element{
    return (
      <select
          ref={(node)=>{
            this.selectedNode = node;
          }}
          value={this.props.id}>
        {tragedySetList.map((set) =>
          <option key={set.id} value={set.id}>{set.name}</option>
        )}
      </select>
    );
  }
 }

 export default PlotForm;