import * as React from 'react';
import { Props, Component} from 'react';
import {tragedySetList, TragedySetType} from '../../models/TragedySet';
import {List, ListItem} from 'material-ui/List';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


interface IRuleProps extends Props<PlotForm>{
  label:string;
  plotList:any
  selectedPlot:any;
};
interface IRuleState {};

class Rule extends React.Component<IRuleProps, IState> {
  render(): JSX.Element{
    return (
      <SelectField
        floatingLabelText={this.props.label}
        value={this.props.selectedPlot && this.props.selectedPlot.id}
      >
        {this.props.plotList.map((plot) =>
          <MenuItem key={plot.id} value={plot.id} label={plot.name}>
            {plot.name}
          </MenuItem>
        )}
      </SelectField>
    );
  }
 }



interface IProps extends Props<PlotForm>{
  mainPlotList:any;
  subPlotLists:any;
  selectedPlotList:any;
};
interface IState {};
class PlotForm extends React.Component<IProps, IState> {

  render(): JSX.Element{
    return (
      <div>
        <Rule
          label={`ルールY`}
          plotList={this.props.mainPlotList} 
          selectedPlot={this.props.selectedPlotList.find(plot=> plot.type==='M')} />
        <br />
        {this.props.subPlotLists.map((sub, i)=>
          <Rule
            label={`ルールX`}
            plotList={sub.subPlotList}
            key={i}
            selectedPlot={sub.selectedPlot} />
        )}

      </div>
    );
  }
 }

 export default PlotForm;