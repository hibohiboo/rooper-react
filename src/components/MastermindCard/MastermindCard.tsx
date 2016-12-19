import * as React from 'react';
import TragedySet from './TragedySet';
import Scenario from '../../models/Scenario';

interface IProps {
  tragedySetName:string;
};

interface IState {};

class MastermindCard extends React.Component<IProps, IState> {
  constructor(public props: IProps) {
    super(props);
    console.log(props);
  }
  render(): JSX.Element{
    return (
      <div>
        <h2>非公開シート</h2>
          <TragedySet name={this.props.tragedySetName} />
      </div>
    );
  }
 }

 export default MastermindCard;