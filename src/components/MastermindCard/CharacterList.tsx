import * as React from 'react';
import { Props, Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

interface IProps extends Props<CharacterList>{
  selectedCharacterList:any;
};
interface IState {};

export default class CharacterList extends React.Component<IProps, IState> {
  constructor(public props: IProps) {
    super(props);
    console.log(props.selectedCharacterList);
  }
  render(): JSX.Element{
    return (
      <Table selectable={false}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>人物</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
        >
          {
            this.props.selectedCharacterList.map(char =>{
              return <TableRow  key={char.id}>
                <TableRowColumn> {char.name} </TableRowColumn>
              </TableRow>
            }
          )}
        </TableBody>
      </Table>
    );
  }
}