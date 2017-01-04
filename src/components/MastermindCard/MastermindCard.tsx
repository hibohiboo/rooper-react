import * as React from 'react';
import Scenario from '../../models/Scenario';
import TragedySet from './TragedySet';
import SelectedRules from './SelectedRules';

interface IProps {
  tragedySetName:string;
  subPlotNum:number;
  selectedPlotList:any;
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
          <SelectedRules ruleList={this.props.selectedPlotList} subPlotNum={this.props.subPlotNum}/>
      </div>
    );
  }
 }

 export default MastermindCard;