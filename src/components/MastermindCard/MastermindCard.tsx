import * as React from 'react';
import Scenario from '../../models/Scenario';
import TragedySet from './TragedySet';
import SelectedPlotList from './SelectedPlotList';

interface IProps {
  tragedySetName:string;
  subPlotNum:number;
  selectedPlotList:any;
};

interface IState {};

class MastermindCard extends React.Component<IProps, IState> {
  constructor(public props: IProps) {
    super(props);
  }
  render(): JSX.Element{
    return (
      <div>
        <h2>非公開シート</h2>
          <TragedySet name={this.props.tragedySetName} />
          <SelectedPlotList 
            mainPlot={this.props.selectedPlotList.find(plot=>plot.type==='M')} 
            subPlotList={this.props.selectedPlotList.filter(plot=>plot.type==='S')}
            subPlotNum={this.props.subPlotNum}/>
      </div>
    );
  }
 }

 export default MastermindCard;