import * as React from 'react';
import { Props, Component} from 'react';
import SelectTragedySet from '../../containers/SelectTragedySet';

interface IProps extends Props<InputForm>{
};
interface IState {};

class InputForm extends React.Component<IProps, IState> {
  render(): JSX.Element{
    return (
  <SelectTragedySet />
    );
  }
 }

 export default InputForm;