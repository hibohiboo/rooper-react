import * as React from 'react';
import Scenario from '../../models/Scenario';
import TragedySet from './TragedySet';
import SelectedPlotList from './SelectedPlotList';
import {Card, CardHeader} from 'material-ui/Card';

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
      <Card>
        <CardHeader
          title={`非公開シート`}
          subtitle={this.props.tragedySetName}
        />
          <SelectedPlotList 
            mainPlot={this.props.selectedPlotList.find(plot=>plot.type==='M')} 
            subPlotList={this.props.selectedPlotList.filter(plot=>plot.type==='S').sort((a,b)=>{ a.num > b.num ? 1 : -1})}
            subPlotNum={this.props.subPlotNum}/>
      </Card>
    );
  }
 }

 export default MastermindCard;