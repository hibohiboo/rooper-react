import * as React from 'react';
import { Props, Component} from 'react';
import TragedySetFormContainer from '../../containers/TragedySetFormContainer';
import PlotFormContainer from '../../containers/PlotFormContainer';
import CharacterListFormContainer from '../../containers/CharacterListFormContainer'
interface IProps extends Props<InputForm>{
}
interface IState {}

class InputForm extends React.Component<IProps, IState> {
  render(): JSX.Element{
    return (
      <div>
        <TragedySetFormContainer />
        <PlotFormContainer />
        <CharacterListFormContainer />
      </div>
    )
  }
 }

 export default InputForm