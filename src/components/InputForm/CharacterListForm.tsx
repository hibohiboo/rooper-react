import * as React from 'react';
import { Props, Component} from 'react';
import TragedySetFormContainer from '../../containers/TragedySetFormContainer';
import PlotFormContainer from '../../containers/PlotFormContainer';
import {Character} from '../../models/Character';
import RoleListForm from './RoleListForm';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import MobileTearSheet from '../ui/MobileTearSheet';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

interface IProps extends Props<CharacterListForm>{
  characterList:Character[];
  unallocatedRoleList:any;
  onToggle:any;
  onChange:any;
}
interface IState {}

export default class CharacterListForm extends React.Component<IProps, IState> {
  handleToggle = (event, toggled) => {
    const id = parseInt(event.target.value);
    this.props.onToggle(id);
  };
  render(): JSX.Element{
    return (
      <MobileTearSheet>
        <Table selectable={false} height={`300px`}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>使用</TableHeaderColumn>
              <TableHeaderColumn>人物</TableHeaderColumn>
              <TableHeaderColumn>役職</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {this.props.characterList.map(char =>{
                return <TableRow  key={char.id}>
                          <TableRowColumn>
                            <Toggle defaultToggled={char.selected} value={char.id} onToggle={this.handleToggle} />
                          </TableRowColumn>
                          <TableRowColumn>{char.name}</TableRowColumn>
                          <TableRowColumn>
                            {char.selected ? <RoleListForm selectedId={char.role && char.role.id || 0} 
                                                           characterId={char.id} 
                                                           onChange={this.props.onChange} 
                                                           roleList={char.role ? [...this.props.unallocatedRoleList, char.role] :
                                                                                 this.props.unallocatedRoleList} /> : ``}
                          </TableRowColumn>  
                        </TableRow>
              }
            )}
          </TableBody>
        </Table>
      </MobileTearSheet>
    )
  }
 }
        // <List>
        //     {
        //       this.props.characterList.map(char =>{
        //         return <ListItem  key={char.id} 
        //                           rightToggle={<Toggle defaultToggled={char.selected} value={char.id} onToggle={this.handleToggle} />}
        //                 >
        //                 {char.name}
   
        //                 </ListItem>
        //       }
        //     )}
        // </List>