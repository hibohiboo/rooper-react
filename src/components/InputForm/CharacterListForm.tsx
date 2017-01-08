import * as React from 'react';
import { Props, Component} from 'react';
import TragedySetFormContainer from '../../containers/TragedySetFormContainer';
import PlotFormContainer from '../../containers/PlotFormContainer';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import MobileTearSheet from '../ui/MobileTearSheet';

interface IProps extends Props<CharacterListForm>{
  characterList:any;
}
interface IState {}

export default class CharacterListForm extends React.Component<IProps, IState> {
  render(): JSX.Element{
    return (
      <MobileTearSheet>
        <List>
            {
              this.props.characterList.map(char =>{
                return <ListItem  key={char.id}  
                                  primaryText= {char.name}
                                  rightToggle={<Toggle toggled={char.selected} />}
                        />
              }
            )}
        </List>
      </MobileTearSheet>
    )
  }
 }
