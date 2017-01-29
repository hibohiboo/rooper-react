import * as React from 'react';
import { Props, Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {IIncident} from '../../models/TragedySet';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

interface IProps extends Props<IncidentListForm>{
  incidentList:IIncident[];
  daysInOneLoop:number;
  onChangeIncident:any;
  selectedIncidentList:any;
}
interface IState {}

const dayColumnStyle={ width:"50px",
                paddingLeft:"10px",
                paddingRight:"10px",
                textAlign:"center"};
                
const columnStyle = {
  width:"120px"
}


const Row = (onChangeIncident, incidentList:IIncident[], day:number, selectedIncidentId) => {
  const handleChange = (event, index, value) => {
      const incidentId = parseInt(value, 10);
      onChangeIncident(day, incidentId);
  };
  return (
    <TableRow  key={day}>
              <TableRowColumn style={dayColumnStyle}>
                {day}
              </TableRowColumn>
              <TableRowColumn style={columnStyle}>
                <SelectField value={selectedIncidentId}
                             onChange={handleChange}>
                  <MenuItem value={0} label={`事件なし`}>
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
  )
};

export default class IncidentListForm extends React.Component<IProps, IState> {
  handleToggle = (event, toggled) => {
    const id = parseInt(event.target.value);
  };
  render(): JSX.Element{
    const rows = [];
    console.log(this.props.selectedIncidentList);

    // 各行の事件・犯人を作成
    for(let i=0; i<this.props.daysInOneLoop;i++){
      let selectedIncidentId = 0;
      const incident = this.props.selectedIncidentList.find(incident=>incident.day === i+1);
      if(incident){
        selectedIncidentId = incident.incidentId;
      }
      rows.push(
        Row(
            this.props.onChangeIncident,
            this.props.incidentList, 
            i+1,
            selectedIncidentId)
      );
    }

    return (
        <Table selectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn style={dayColumnStyle}>日数</TableHeaderColumn>
              <TableHeaderColumn style={columnStyle}>事件</TableHeaderColumn>
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