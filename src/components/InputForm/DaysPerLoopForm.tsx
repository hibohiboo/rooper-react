import * as React from 'react';
import {Props, Component} from 'react';
import TextField from 'material-ui/TextField';

interface IProps extends Props<DaysPerLoopForm>{
  daysPerLoop:number;
  onChange:any;
}
interface IState {}

export default class DaysPerLoopForm extends React.Component<IProps, IState> {
  handleChange = (event) => {
    const daysPerLoop = parseInt(event.target.value);
    this.props.onChange(daysPerLoop);
  };
  render(): JSX.Element{
    return (
        <TextField floatingLabelText={"1ループ日数"}
                   type={"number"} 
                   value={this.props.daysPerLoop}
                   style={{width:"100px"}}
                   onChange={this.handleChange}
                    />
    )
  }
 }
