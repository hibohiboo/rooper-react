import * as React from 'react';
import { Props, Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {IIncident} from '../../models/TragedySet';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

interface IProps extends Props<IncidentListForm>{
  incidentList:IIncident[];
}
interface IState {}

const dayColumnStyle={ width:"50px",
                paddingLeft:"10px",
                paddingRight:"10px",
                textAlign:"center"};
                
const columnStyle = {
  width:"120px"
}

const Row = (incidentList, i:number) => (
  <TableRow  key={i}>
            <TableRowColumn style={dayColumnStyle}>
              {i+1}
            </TableRowColumn>
            <TableRowColumn style={columnStyle}>
              <SelectField>
                <MenuItem value={0} label={`パーソン`}>
                  事件なし
                </MenuItem>
                {incidentList.map(incident =>
                  <MenuItem key={incident.id} value={incident.id} label={incident.name}>
                    {incident.name}
                  </MenuItem>
                )}
              </SelectField>
            </TableRowColumn>
            <TableRowColumn style={columnStyle}>
            </TableRowColumn>
            <TableRowColumn>
            </TableRowColumn>  
  </TableRow>
);

export default class IncidentListForm extends React.Component<IProps, IState> {
  handleToggle = (event, toggled) => {
    const id = parseInt(event.target.value);
  };
  render(): JSX.Element{
    const rows = [];
    for(let i=0; i<8;i++){
      rows.push(Row(this.props.incidentList, i));
    }

    return (
        <Table selectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>日数</TableHeaderColumn>
              <TableHeaderColumn>事件</TableHeaderColumn>
              <TableHeaderColumn>犯人</TableHeaderColumn>
              <TableHeaderColumn>効果</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {rows}
          </TableBody>
        </Table>
    )
  }
 }

             // {this.props.incidentList.map(incident =>{
                // return <TableRow  key={incident.id}>
                //           <TableRowColumn style={dayColumnStyle}>
                //             {incident.name}
                //           </TableRowColumn>
                //           <TableRowColumn style={columnStyle}>
                //             {incident.name}
                //           </TableRowColumn>
                //           <TableRowColumn style={columnStyle}>
                //           </TableRowColumn>
                //           <TableRowColumn>
                //             {incident.effect}
                //           </TableRowColumn>  
                //         </TableRow>
            //   }
            // )}