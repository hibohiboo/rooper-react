import * as React from 'react';
import { Props, Component} from 'react';
import {tragedySetList, TragedySetType} from '../../models/TragedySet';
import {List, ListItem} from 'material-ui/List';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


interface IRuleProps extends Props<RoleListForm>{
  roleList:any;
  onChange:any;
  characterId:number;
  selectedId:number;
  // label:string;
  // plotList:any
  // selectedPlot:any;
  // onChange:any;
  // num:number;
};
interface IState {};

export default class RoleListForm extends React.Component<IRuleProps, IState> {

  handleChange = (event, index, value) => {
    const selectedId = parseInt(value, 10);
    this.props.onChange(selectedId, this.props.characterId);
  }
  render(): JSX.Element{
    return (
      <SelectField
        // floatingLabelText={this.props.label}
        value={this.props.selectedId}
        onChange={this.handleChange}
      >
        <MenuItem value={0} label={`パーソン`}>
          パーソン
        </MenuItem>
        {this.props.roleList.map((role, index) =>
          <MenuItem key={index} value={role.id} label={role.name}>
            {role.name}
          </MenuItem>
        )}
      </SelectField>
    );
  }
 }
