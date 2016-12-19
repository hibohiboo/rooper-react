import * as React from 'react';
import TragedySet from './TragedySet';

interface IProps {};

interface IState {};

class MastermindCard extends React.Component<IProps, IState> {
  render(): JSX.Element{
    return (
      <div>
        <h2>非公開シート</h2>
        <TragedySet name="First Steps"/>
      </div>
    );
  }
 }

 export default MastermindCard;